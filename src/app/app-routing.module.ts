import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StatComponent} from './stat/stat.component';
import { DeepComponent} from './deep/deep.component';

const routes: Routes = [
  { path: 'login',  component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'stat', component: StatComponent},
  { path: 'deep', component: DeepComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
