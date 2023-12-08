import { Injectable, OnDestroy } from '@angular/core';
import { ProfilesService } from '@modules/shared/services';
import axios from 'axios';
import { BehaviorSubject, Subscription } from 'rxjs';
import { BrowseLayout, Card } from '../../../models';
import { APIBrowseLayout } from '../../../models/api';
import { Profile } from '../../../models/profile.interface';

@Injectable({ providedIn: 'root' })
export class BrowseService implements OnDestroy {
  readonly currentProfileLayout$: BehaviorSubject<BrowseLayout | null> = new BehaviorSubject<BrowseLayout | null>(null);
  currentProfileSubscription: Subscription;
  constructor(private _profilesService: ProfilesService) {
    this.currentProfileSubscription = this._profilesService.currentProfile$.subscribe(async (profile) => {
      let profileLayout = null;
      if (profile !== null) {
        profileLayout = await this.getBrowseLayout(profile);
      }
      console.warn(profileLayout, this._profilesService.currentProfile$.value);
      this.currentProfileLayout$.next(profileLayout);
    });
  }
  ngOnDestroy(): void {
    this.currentProfileSubscription.unsubscribe();
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
}
