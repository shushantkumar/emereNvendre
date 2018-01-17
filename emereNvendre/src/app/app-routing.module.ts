import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdListComponent } from './prod-list/prod-list.component';

const routes: Routes = [

  {
    path: 'product',
    component: ProdListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
