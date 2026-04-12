import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing';
import { HomeComponent } from './home/home';
import { LoginComponent } from './login/login';
import { ElnidoComponent } from './elnido/elnido';
import { ContactComponent} from './contact/contact';
import { TravelTipsComponent } from './travel-tips/travel-tips';
import { AboutUsComponent } from './about-us/about-us';
import { DashboardComponent } from './dashboard/dashboard';


export const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'travel-tips', component: TravelTipsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'elnido', component: ElnidoComponent},
  { path: '**', redirectTo: 'home' } 


];