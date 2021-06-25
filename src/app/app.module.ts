import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SentenceBlockComponent } from './main-page/sentence-block/sentence-block.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSliderComponent,
    MainPageComponent,
    SentenceBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
