import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SliderService } from './services/slider.service';
import { SliderPageComponent } from './slider-page/slider-page.component';

const routes: Routes = [
  { path: 'slider', component: SliderPageComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
