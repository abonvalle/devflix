import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import * as profilesJSON from '@assets/jsons/profiles.json';
import axios from 'axios';
import { BehaviorSubject, Subscription } from 'rxjs';
import { BrowseLayout, Card } from '../../../models';
import { APIBrowseLayout } from '../../../models/api';
import { Profile } from '../../../models/profile.interface';

@Injectable({ providedIn: 'root' })
export class BrowseService implements OnDestroy {
  readonly currentProfile$: BehaviorSubject<Profile | null> = new BehaviorSubject<Profile | null>(null);
  readonly currentProfileLayout$: BehaviorSubject<BrowseLayout | null> = new BehaviorSubject<BrowseLayout | null>(null);
  currentProfileSubscription: Subscription;
  constructor(private _router: Router) {
    this.currentProfileSubscription = this.currentProfile$.subscribe(async (profile) => {
      let profileLayout = null;
      if (profile !== null) {
        profileLayout = await this.getBrowseLayout(profile);
      }
      console.warn(profileLayout, this.currentProfile$.value);
      this.currentProfileLayout$.next(profileLayout);
    });
    const profile = sessionStorage.getItem('profile');
    if (profile) {
      this.setCurrentProfile(JSON.parse(profile));
    }
  }
  ngOnDestroy(): void {
    this.currentProfileSubscription.unsubscribe();
  }

  async setCurrentProfile(profile: Profile): Promise<void> {
    this.currentProfile$.next(profile);
    sessionStorage.setItem('profile', JSON.stringify(profile));
  }
  async getBrowseLayout(profile: Profile): Promise<BrowseLayout> {
    const APIProfileLayout = (
      await axios.get(
        `/assets/jsons/layouts/${profile.layoutsGuids[Math.floor(Math.random() * profile.layoutsGuids.length)]}.json`
      )
    ).data as APIBrowseLayout;
    console.warn(APIProfileLayout);
    const cardsGuids = APIProfileLayout.lists.reduce(
      (cardGuidsArr, list) => {
        list.cardsGuids.forEach((cardguid) => {
          if (!cardGuidsArr.includes(cardguid)) {
            cardGuidsArr.push(cardguid);
          }
        });
        return cardGuidsArr;
      },
      [...APIProfileLayout.headerCardsGuids]
    );

    let cards = await Promise.all(
      cardsGuids.map(
        (cardGuid) =>
          axios.get(`/assets/jsons/cards/${cardGuid}.json`).then(
            (a) => a.data,
            () => null
          ) as Promise<Card | null>
      )
    );
    cards = cards.filter((card) => card !== null);
    console.warn('cards', cards);
    let profileLayout: BrowseLayout;
    profileLayout = {
      guid: APIProfileLayout.guid,
      lists: [
        ...APIProfileLayout.lists.map((list) => ({
          guid: list.guid,
          name: list.name,
          type: list.type,
          cards: list.cardsGuids
            .map((guid) => cards.find((card) => card?.guid === guid))
            .filter((card) => !!card) as Card[]
        }))
      ],
      mainCards: APIProfileLayout.headerCardsGuids
        .map((guid) => cards.find((card) => card?.guid === guid))
        .filter((card) => !!card) as Card[]
    };
    return profileLayout;
  }
  disconnect() {
    this.currentProfile$.next(null);
    sessionStorage.clear();
    this._router.navigateByUrl('/login');
  }
  editProfiles() {
    this.currentProfile$.next(null);
    sessionStorage.clear();
    this._router.navigateByUrl('/ManageProfiles');
  }
  updateProfile(guid: string) {
    const profilesjson = profilesJSON;
    const profiles = profilesjson.profiles;
    const selectedProfile = profiles.find((p) => p.guid === guid);
    if (selectedProfile) {
      this.setCurrentProfile(selectedProfile);
    }
  }
}
