import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoggedInGuard} from 'src/app/guards/logged-in.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'edit-user',
    loadChildren: () => import('./pages/edit-user/edit-user.module').then(m => m.EditUserPageModule),
    canActivate: [LoggedInGuard]
  },

  {
    path: 'event-create',
    loadChildren: () => import('./pages/event-create/event-create.module').then(m => m.EventCreatePageModule),
    canActivate: [LoggedInGuard]
  },
  {
    path: 'event-list',
    loadChildren: () => import('./pages/event-list/event-list.module').then(m => m.EventListPageModule),
    canActivate: [LoggedInGuard]
  },
  {
    path: 'profile/:userId',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then(m => m.UserProfilePageModule)
  },
  {
    path: 'event-details',
    loadChildren: () => import('./pages/event-details/event-details.module').then(m => m.EventDetailsPageModule)
  },
  {
    path: 'event-details/:id',
    loadChildren: () => import('./pages/event-details/event-details.module').then(m => m.EventDetailsPageModule)

  },
  {
    path: 'friendlist',
    loadChildren: () => import('./pages/friendlist/friendlist.module').then(m => m.FriendlistPageModule),
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
