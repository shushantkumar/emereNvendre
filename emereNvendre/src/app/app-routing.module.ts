import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { SignInComponent} from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './dashboard/about/about.component';
import { PostComponent } from './dashboard/post/post.component';
import { RequestComponent } from './dashboard/request/request.component';

const routes: Routes = [

  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'request',
    component: RequestComponent
  },
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
