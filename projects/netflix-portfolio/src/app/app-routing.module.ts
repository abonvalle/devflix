import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('@features/sign-in/sign-in.module').then((m) => m.SignInModule) },
  { path: 'browse', loadChildren: () => import('@features/browse/browse.module').then((m) => m.BrowseModule) },
  {
    path: 'ManageProfiles',
    loadChildren: () => import('@features/manage-profiles/manage-profiles.module').then((m) => m.ManageProfilesModule)
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
