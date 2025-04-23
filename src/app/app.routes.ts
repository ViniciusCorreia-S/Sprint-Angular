import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { HomeComponent } from './components/pages/home/home.component';

export const routes: Routes = [
    {path : 'login', component:LoginComponent},
    {path : 'home', component:HomeComponent},
    {path : 'dashboard', component:DashboardComponent},
    {path : '**', redirectTo:'/login', pathMatch:'full'},
];
