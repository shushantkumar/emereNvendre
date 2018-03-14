import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { SignInComponent} from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllpostsComponent } from './allposts/allposts.component';
import { AboutComponent } from './dashboard/about/about.component';
import { PostComponent } from './dashboard/post/post.component';
import { RequestComponent } from './dashboard/request/request.component';
import { AllrequestsComponent } from './allrequests/allrequests.component';
import { TestryComponent } from './testry/testry.component'

const routes: Routes = [

  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'allposts',
    component: AllpostsComponent
  },
  {
    path: 'allrequests',
    component: AllrequestsComponent
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
  },
  {
    path: 'testry',
    component: TestryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
