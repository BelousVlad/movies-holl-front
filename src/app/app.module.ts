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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagSlideComponent } from './tag-slider/tag-slide/tag-slide.component';
import { ArrowRightComponent } from './elements/arrows/arrow-right/arrow-right.component';
import { ArrowLeftComponent } from './elements/arrows/arrow-left/arrow-left.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { BasicContentComponent } from './main-page/basic-content/basic-content.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { HeaderComponent } from './header-section/header/header.component';
import { SearchSectionComponent } from './search-section/search-section.component';

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
    TagSlideComponent,
    ArrowRightComponent,
    ArrowLeftComponent,
    MoviesListComponent,
    BasicContentComponent,
    HeaderSectionComponent,
    HeaderComponent,
    SearchSectionComponent,
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
    MatInputModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
