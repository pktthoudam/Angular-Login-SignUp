import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogInComponent } from './log-in/log-in.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { PhotosComponent } from './photos/photos.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'', redirectTo:"log-in", pathMatch:"full"},
  {path:'log-in', component:LogInComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'update/:id', component:SignUpComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'member-list', component:MemberlistComponent},
  {path:'photos', component:PhotosComponent},
  {path:'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
