import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from '../../../environments/environments';

@Injectable({providedIn: 'root'})

export class HeroesServices {

  private baseUrl = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<Hero[]>{

    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`)
  }


  getHeroById(id: string): Observable<Hero|undefined>{
    return this.httpClient.get<Hero|undefined>(`${this.baseUrl}/heroes/${id}`)
    .pipe(
      catchError(error => of(undefined))
    );
  }

  getSuggestions(query: string): Observable<Hero[]>{
    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`)
  }

}
