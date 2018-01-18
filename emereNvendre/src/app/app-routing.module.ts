import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdListComponent } from './prod-list/prod-list.component';
import { SignInComponent} from './sign-in/sign-in.component'

const routes: Routes = [

  {
    path: 'product',
    component: ProdListComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
