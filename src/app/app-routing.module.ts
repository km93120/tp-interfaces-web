import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';



const routes: Routes = [
	{ path: 'login', component: LoginComponent},
	{ path: 'stats', component: StatsComponent},
	{ path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
