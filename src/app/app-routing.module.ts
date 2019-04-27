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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
