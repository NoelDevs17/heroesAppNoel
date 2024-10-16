import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-Page/hero-Page.component';
import { LayoutPageComponent } from './pages/layout-Page/layout-Page.component';
import { ListPagesComponent } from './pages/list-Pages/list-Pages.component';
import { NewPageComponent } from './pages/new-Page/new-Page.component';
import { SearchPageComponent } from './pages/searchPage/searchPage.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { HeroImagePipePipe } from './pipes/hero-image-pipe.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListPagesComponent,
    NewPageComponent,
    SearchPageComponent,
    CardComponent,
    HeroImagePipePipe

  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
