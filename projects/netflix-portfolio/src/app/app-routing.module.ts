import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreLayoutComponent } from '@core/core-layout/core-layout.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('@features/sign-in/sign-in.module').then((m) => m.SignInModule) },
  {
    path: '',
    component: CoreLayoutComponent,
    children: [
      { path: 'privacy', loadChildren: () => import('@features/privacy/privacy.module').then((m) => m.PrivacyModule) },
      { path: 'terms', loadChildren: () => import('@features/terms/terms.module').then((m) => m.TermsModule) },
      { path: 'browse', loadChildren: () => import('@features/browse/browse.module').then((m) => m.BrowseModule) },
      {
        path: 'ManageProfiles',
        loadChildren: () =>
          import('@features/manage-profiles/manage-profiles.module').then((m) => m.ManageProfilesModule)
      },
      { path: '**', redirectTo: '/browse', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '/browse', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
