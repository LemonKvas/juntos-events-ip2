import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoggedInGuard} from "src/app/guards/logged-in.guard";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'edit-user',
    loadChildren: () => import('./edit-user/edit-user.module').then( m => m.EditUserPageModule),
    canActivate: [LoggedInGuard]
  },

  {
    path: 'event-create',
    loadChildren: () => import('./event-create/event-create.module').then( m => m.EventCreatePageModule),
    canActivate: [LoggedInGuard]
  },
  {
    path: 'event-list',
    loadChildren: () => import('./event-list/event-list.module').then( m => m.EventListPageModule),
    canActivate: [LoggedInGuard]
  },  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
