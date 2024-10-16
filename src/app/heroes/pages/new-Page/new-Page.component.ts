import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesServices } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-Page',
  templateUrl: './new-Page.component.html',
})
export class NewPageComponent implements OnInit {

  public heroForm = new FormGroup({

  id:               new FormControl<string>('') ,
  superhero:        new FormControl<string>('', {nonNullable: true}) ,
  publisher:        new FormControl<Publisher>(Publisher.DCComics) ,
  alter_ego:        new FormControl('') ,
  first_appearance: new FormControl('') ,
  characters:       new FormControl('') ,
  alt_img:          new FormControl('')
  });


  public publishers = [
    {id: 'DC Comics', desc: 'DC - Comics'},
    {id: 'Marvel Comics', desc: 'Malver - Comics'},
  ]

  constructor(private heroesService: HeroesServices,
              private activatedRouter: ActivatedRoute,
              private router: Router,
              private snackbar: MatSnackBar,
  ) { }

  get currentHero(): Hero{
    const hero = this.heroForm.value as Hero;
    return hero;
  }



  ngOnInit() {
    if(!this.router.url.includes('edit'))return;

    this.activatedRouter.params
    .pipe(
      switchMap(params => this.heroesService.getHeroById(params['id'])),
    ).subscribe( hero => {
      if(!hero)return this.router.navigateByUrl('/');

      this.heroForm.reset(hero);
      return;

    }
    )

  }

  onSubmit(){
   if(this.heroForm.invalid) return;

    if(this.currentHero.id){
      this.heroesService.updateHero(this.currentHero).subscribe(
        (response) =>
          //TODO: mostrar snackbar
          console.log(response),
      );
      return;
    }
    this.heroesService.addHero(this.currentHero)
    .subscribe(res =>{
      //TODO: mostrar snackbar y navegar a /heroes/edit/hero.id
      console.log(res);
    });

  }

}
