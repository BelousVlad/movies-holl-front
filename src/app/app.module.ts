import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
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
import { HeaderNavComponent } from './header-section/header-nav/header-nav.component';
import { MobileNavMenuComponent } from './header-section/mobile-nav-menu/mobile-nav-menu.component';
import { BurgerMenuComponent } from './header-section/header/burger-menu/burger-menu.component';
import { SearchComponent } from './elements/search/search.component';
import { HidingSearchComponent } from './elements/search/hiding-search/hiding-search.component';
import { LocalizationSelectComponent } from './elements/localization-select/localization-select.component';
import { MobilePanelNavItemsComponent } from './header-section/mobile-nav-menu/mobile-panel-nav-items/mobile-panel-nav-items.component';
import { HeaderNavItemsComponent } from './header-section/header-nav/header-nav-items/header-nav-items.component';
import { AdditionNavItemsComponent } from './header-section/addtion-nav/addition-nav-items/addition-nav-items.component';
import { AdditionMobileNavItemsComponent } from './header-section/addtion-nav/addition-mobile-nav-items/addition-mobile-nav-items.component';
import { SocialIconsComponent } from './elements/social-icons/social-icons.component';
import { FacebookIconComponent } from './elements/social-icons/facebook-icon/facebook-icon.component';
import { SocialIconsListComponent } from './elements/social-icons/social-icons-list/social-icons-list.component';
import { InstagramIconComponent } from './elements/social-icons/instagram-icon/instagram-icon.component';
import { YoutubeIconComponent } from './elements/social-icons/youtube-icon/youtube-icon.component';
import { SwitcherComponent } from './elements/switcher/switcher.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DropdownMenuComponent } from './elements/dropdown-menu/dropdown-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MobileHeaderNavComponent } from './header-section/mobile-header-nav/mobile-header-nav.component';
import { MatButtonModule } from '@angular/material/button';
import { MoviesListContainerComponent } from './movies-list/movies-list-container/movies-list-container.component';
import { MovieElementComponent } from './movies-list/movies-list-container/movie-element/movie-element.component';
import { MoviesSectionComponent } from './movies-list/movies-section/movies-section.component';
import { MobileSliderComponent } from './elements/mobile-slider/mobile-slider.component';
import { MobileSliderItemComponent } from './elements/mobile-slider/mobile-slider-item/mobile-slider-item.component';
import { MatListModule } from '@angular/material/list';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MovieInfoComponent } from './movie-page/movie-info/movie-info.component';
import { TelephoneCallbackComponent } from './elements/telephone-callback/telephone-callback.component';
import { GenreMoviesBannersSliderComponent } from './movies-banners-slider/genre-movies-banners-slider/genre-movies-banners-slider.component';
import { LoginComponent } from './elements/login/login.component';
import { BorderedSearchComponent } from './elements/search/bordered-search/bordered-search.component';
import { MobileHeaderSearchComponent } from './header-section/mobile-header-nav/mobile-header-search/mobile-header-search.component';
import { AutocompleteComponent } from './elements/autocomplete/autocomplete.component';
import { AutocompleteMovieComponent } from './elements/autocomplete/autocomplete-movie/autocomplete-movie.component';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderNavItemComponent } from './header-section/header-nav/header-nav-item/header-nav-item.component';
import { Page404Component } from './page404/page404.component';
import { CloseSidenavDirective } from './directives/close-sidenav/close-sidenav.directive';
import { PageControllComponent } from './movies-list/movies-section/page-controll/page-controll.component';
import { BonusSectionComponent } from './bonus-section/bonus-section.component';
import { BonusSliderComponent } from './bonus-section/bonus-slider/bonus-slider.component';
import { NotMoviesComponent } from './movies-list/movies-section/not-movies/not-movies.component';
import { RefreshButtonComponent } from './elements/refresh-button/refresh-button.component';
import { TelegramIconComponent } from './elements/social-icons/telegram-icon/telegram-icon.component';
import { PrinterestIconComponent } from './elements/social-icons/printerest-icon/printerest-icon.component';
import { TwitterIconComponent } from './elements/social-icons/twitter-icon/twitter-icon.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { ArrowDownComponent } from './elements/arrows/arrow-down/arrow-down.component';
import { MobilePanelNavItemComponent } from './header-section/mobile-nav-menu/mobile-panel-nav-items/mobile-panel-nav-item/mobile-panel-nav-item.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SetPhoneDialogComponent } from './dialogs/set-phone-dialog/set-phone-dialog.component';
import { MatCardModule } from '@angular/material/card';

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
    HeaderNavComponent,
    SearchSectionComponent,
    MobileNavMenuComponent,
    BurgerMenuComponent,
    SearchComponent,
    HidingSearchComponent,
    LocalizationSelectComponent,
    MobilePanelNavItemsComponent,
    HeaderNavItemsComponent,
    AdditionNavItemsComponent,
    AdditionMobileNavItemsComponent,
    SocialIconsComponent,
    FacebookIconComponent,
    SocialIconsListComponent,
    InstagramIconComponent,
    YoutubeIconComponent,
    SwitcherComponent,
    DropdownMenuComponent,
    MobileHeaderNavComponent,
    MoviesListContainerComponent,
    MovieElementComponent,
    MoviesSectionComponent,
    MobileSliderComponent,
    MobileSliderItemComponent,
    MoviePageComponent,
    MovieInfoComponent,
    TelephoneCallbackComponent,
    GenreMoviesBannersSliderComponent,
    LoginComponent,
    BorderedSearchComponent,
    MobileHeaderSearchComponent,
    AutocompleteComponent,
    AutocompleteMovieComponent,
    HeaderNavItemComponent,
    Page404Component,
    CloseSidenavDirective,
    PageControllComponent,
    BonusSectionComponent,
    BonusSliderComponent,
    NotMoviesComponent,
    RefreshButtonComponent,
    TelegramIconComponent,
    PrinterestIconComponent,
    TwitterIconComponent,
    ArrowDownComponent,
    MobilePanelNavItemComponent,
    SetPhoneDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    SlickCarouselModule,
    MatCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    HttpClientModule,
    MatTabsModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [ SlickCarouselComponent,
    // { provide: LOCALE_ID, useValue: getLocaleId() }
    { provide: 'api_url', useValue: "http://bonus.format-tv.net/api/" }
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
