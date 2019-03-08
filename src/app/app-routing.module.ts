import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'signup', loadChildren: './auth/signup/signup.module#SignupModule'
  },
  {
    path: 'login', loadChildren: './auth/login/login.module#LoginModule'
  },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {
    path: 'profile/:id',
    children: [
      {
        path: '',
        loadChildren: './profile/profile.module#ProfileModule'
      }
    ]
  },
  {
    path: 'chat/:id',
    children: [
      {
        path: '',
        loadChildren: './chat/chat.module#ChatModule'
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
