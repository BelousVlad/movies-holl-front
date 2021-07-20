import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BasicContentComponent } from './main-page/basic-content/basic-content.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  { path: 'item/:id', component: MoviePageComponent },
  { path: '', component: MainPageComponent, children: [
      { path: 'movies', component: MoviesListComponent },
      { path: '', component: BasicContentComponent }
    ]
  },
  { path: '**', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

