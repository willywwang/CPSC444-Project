import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: './auth/signup.module#SignupModule'
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
