import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login-page/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { SliderPageComponent } from './slider-page/slider-page.component';
import { SliderSettingsComponent } from './slider-page/slider-settings/slider-settings.component';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { SlidePanelComponent } from './slider-page/slider-settings/slide-panel/slide-panel.component';
import { SlideNewPanelComponent } from './slider-page/slider-settings/slide-new-panel/slide-new-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginComponent,
    SliderPageComponent,
    SliderSettingsComponent,
    SlidePanelComponent,
    SlideNewPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatExpansionModule,
    MatCardModule,
  ],
  providers: [
    // { provide: 'api_url', useValue: "http://bonus.format-tv.net/api/" }
    { provide: 'api_url', useValue: "/api/slider" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
