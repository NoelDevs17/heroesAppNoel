import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesServices } from '../../services/heroes.service';

@Component({
  selector: 'app-list-Pages',
  templateUrl: './list-Pages.component.html',

})
export class ListPagesComponent implements OnInit {

public heroes: Hero[] = [];

  constructor(private _serviceHeroe: HeroesServices) { }

  ngOnInit() {
    this._serviceHeroe.getHeroes().subscribe(res => {
      this.heroes = res;
      console.log('Respuesta de herores', this.heroes)
    })
  }

}
