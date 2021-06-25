import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SentenceBlockComponent } from './main-page/sentence-block/sentence-block.component';
import { TagSliderComponent } from './tag-slider/tag-slider.component';
import { MovieBannerComponent } from './movie-banner/movie-banner.component';
import { MoviesBannersSliderComponent } from './movies-banners-slider/movies-banners-slider.component';
import { DevicesApplicationsSectionComponent } from './devices-applications-section/devices-applications-section.component';


@NgModule({
  declarations: [
    AppComponent,
    MainSliderComponent,
    MainPageComponent,
    SentenceBlockComponent,
    TagSliderComponent,
    MovieBannerComponent,
    MoviesBannersSliderComponent,
    DevicesApplicationsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    MatCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
