import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicContentComponent } from './main-page/basic-content/basic-content.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  { path: '', component: MainPageComponent, children: [
    { path: 'list', component: MoviesListComponent },
    { path: '', component: BasicContentComponent }
  ]},
  { path: '**', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

