import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-Page/layout-Page.component';
import { NewPageComponent } from './pages/new-Page/new-Page.component';
import { SearchPageComponent } from './pages/searchPage/searchPage.component';
import { ListPagesComponent } from './pages/list-Pages/list-Pages.component';
import { HeroPageComponent } from './pages/hero-Page/hero-Page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path: 'new-hero', component: NewPageComponent },
      {path: 'search', component: SearchPageComponent },
      {path: 'edit/:id', component: NewPageComponent },
      {path: 'list', component: ListPagesComponent },
      {path: ':id', component: HeroPageComponent },
      {path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
