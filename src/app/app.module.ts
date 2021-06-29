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
import { MovieBannerComponent } from './elements/movie-banner/movie-banner.component';
import { MoviesBannersSliderComponent } from './movies-banners-slider/movies-banners-slider.component';
import { DevicesApplicationsSectionComponent } from './devices-applications-section/devices-applications-section.component';
import { SectionFooterComponent } from './section-footer/section-footer.component';
import { CallbackComponent } from './callback/callback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { CallbackSectionComponent } from './callback-section/callback-section.component';
import { InputDirective } from './directives/input/input-directive.directive';
import { BasicButtonComponent } from './elements/basic-button/basic-button.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainSliderComponent,
    MainPageComponent,
    SentenceBlockComponent,
    TagSliderComponent,
    MovieBannerComponent,
    MoviesBannersSliderComponent,
    DevicesApplicationsSectionComponent,
    SectionFooterComponent,
    CallbackComponent,
    CallbackSectionComponent,
    InputDirective,
    BasicButtonComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    MatCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
