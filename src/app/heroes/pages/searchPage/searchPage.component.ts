import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesServices } from '../../services/herores.service';

@Component({
  selector: 'app-searchPage',
  templateUrl: './searchPage.component.html',

})
export class SearchPageComponent implements OnInit {

  public searcInput = new FormControl('');
  public heroes: Hero[] = []


  constructor(private heroesServices: HeroesServices) { }

  ngOnInit() {
  }

  searchHero(){
    const value = this.searcInput.value || '';
    this.heroesServices.getSuggestions(value).subscribe(res => {
      this.heroes = res;
    })
    console.log(this.heroes)
  }

}
