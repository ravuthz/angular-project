import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './shared/pages/not-found/not-found.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./frontend/frontend.module').then(m => m.FrontendModule) },
  { path: 'admin', loadChildren: () => import('./backend/backend.module').then(m => m.BackendModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
