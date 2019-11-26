import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'backend', loadChildren: () => import('./backend/backend.module').then(m => m.BackendModule) }, { path: 'frontend', loadChildren: () => import('./frontend/frontend.module').then(m => m.FrontendModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
