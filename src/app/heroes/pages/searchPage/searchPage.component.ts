import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesServices } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-searchPage',
  templateUrl: './searchPage.component.html',

})
export class SearchPageComponent implements OnInit {

  public searcInput = new FormControl('');
  public heroes: Hero[] = []
  public selectedHero?: Hero ;


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

  onSelectedOption(event: MatAutocompleteSelectedEvent){
    if(!event.option.value){
       this.selectedHero = undefined;
      return
    }

    const hero:Hero = event.option.value;
    this.searcInput.setValue(hero.superhero);
    this.selectedHero = hero;
  }

}
