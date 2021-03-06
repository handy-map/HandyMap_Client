import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    children : [
      {
        path: '',
        loadChildren: './home/home.module#HomePageModule'
      }
    ]
  },
  {
    path: 'worker',
    children: [
      {
        path: ':workerId',
        loadChildren: './worker-profile/worker-profile.module#WorkerProfilePageModule'
      }
    ]
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'sign-up', loadChildren: './auth/sign-up/sign-up.module#SignUpPageModule' },
  { path: 'log-in', loadChildren: './auth/log-in/log-in.module#LogInPageModule' },
  {
    path: 'book-now',
    children: [
      {
        path: ':workerId',
        loadChildren: './book-now/book-now.module#BookNowPageModule'
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
