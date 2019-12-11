import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyDirectComponent } from './my-direct/my-direct.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'user', component:UserComponent, children:[
    {path:'add-Member', component:NewMemberComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'my-Direct', component:MyDirectComponent},
    {path:'my-Team', component:MyTeamComponent}
  ]},
  {path:'login', component:LoginComponent},
  {path: '', redirectTo:'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
