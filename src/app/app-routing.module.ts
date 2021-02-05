import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public-pages/home.component';
import { PrivateHomeComponent } from './private-pages/home.component';
import { SignInComponent } from './public-pages/sign-in/sign-in.component';
import { SignUpComponent } from './public-pages/sign-up/sign-up.component';
import { AuthenticationGuard } from './shared/guards/authentication.guard';
import { PublicPostListComponent } from './public-pages/post-list/post-list.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateHomeComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: 'post',
        loadChildren: () =>
          import('./private-pages/post-create/post-create.module').then(
            (m) => m.PostCreateModule
          ),
      },

      {
        path: 'post-list',
        loadChildren: () =>
          import('./private-pages/post-list/post-list.module').then(
            (m) => m.PostListModule
          ),
      },
    ],
  },
  {
    path: 'public',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'post-list', component: PublicPostListComponent },

    ],
  },
  {  path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
