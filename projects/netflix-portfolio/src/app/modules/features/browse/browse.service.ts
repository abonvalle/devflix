import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile } from '../../../models/profile';

@Injectable({ providedIn: 'root' })
export class BrowseService {
  currentProfile$: BehaviorSubject<Profile | null> = new BehaviorSubject<Profile | null>(null);
  constructor() {}
}
