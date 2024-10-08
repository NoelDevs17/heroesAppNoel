import { Component, OnInit } from '@angular/core';
import { HeroesServices } from '../../services/herores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-Page',
  templateUrl: './hero-Page.component.html',

})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(private heroesService: HeroesServices,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroById(id)),
    ).subscribe(hero => {

      if(!hero) return this.router.navigate(['/heroes/list']);

      this.hero = hero;
      console.log('first ',hero)
      return;
    })

}
}
