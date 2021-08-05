import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


import { AuthGuard } from './guards/auth.guard';
import { StatisticsComponent } from './statistics/statistics.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'statistic', component: StatisticsComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
  { path: 'search/:searchTerm', component: StatisticsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }