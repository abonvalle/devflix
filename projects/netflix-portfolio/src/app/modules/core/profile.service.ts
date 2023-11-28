import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile } from '../../models/profile.interface';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  profile$ = new BehaviorSubject<Profile | null>(null);
  constructor() {}
}
