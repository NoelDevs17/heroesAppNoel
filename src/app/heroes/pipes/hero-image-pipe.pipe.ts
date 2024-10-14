import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe( {
  name: 'heroImage'
} )
export class HeroImagePipePipe implements PipeTransform {

  transform( hero: Hero ): string {
    if ( !hero.id && !hero.alter_ego ) {
      return '/no-image.png';
    }

    if ( hero.alt_img ) return hero.alt_img;

    return `/heroes/${ hero.id }.png`;

  }

}
