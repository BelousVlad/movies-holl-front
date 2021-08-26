import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicContentComponent } from './main-page/basic-content/basic-content.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { Page404Component } from './page404/page404.component';

// const standart_navigation = [
//   { path: 'item/:id', component: MoviePageComponent },
//   { path: '**', component: MainPageComponent, children: [
//       { path: 'movies', component: MoviesListComponent },
//       { path: '', component: BasicContentComponent }
//     ]
//   },
//   // { path: '**', component: Page404Component}
// ]

const routes: Routes = [
  { path: 'item/:id', component: MoviePageComponent },
  { path: '', component: MainPageComponent, children: [
      { path: 'movies', component: MoviesListComponent },
      { path: '', component: BasicContentComponent }
    ]
  },
  { path: '**', component: Page404Component}

  // {
  //   path: "**",
  //   children: standart_navigation
  // },
  // {
  //   path: ":lang",
  //   children: standart_navigation
  // },
  // { path: '', pathMatch: 'full' , redirectTo: '/ru'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

