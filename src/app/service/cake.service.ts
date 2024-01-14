import { Injectable } from '@angular/core';
import {from, Observable} from "rxjs";
//Método oficial según guía de la API
//import {createClient, ErrorResponse, PhotosWithTotalResults} from 'pexels';
import { Cake } from '../models/cake.interface'
import {CakeList} from "../models/cakeList.interface";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CakeService {


  private apiUrl = 'https://api.pexels.com/v1/search';

  //Token de Pexels para madebo@uoc.edu
  private headers = new HttpHeaders({
    'Authorization': 't2eF7KBKAkTmUwbLt8t0pFczFDDajVwVnMeYiH179S7QaskDapUwmZ9L'
  });

  constructor(private http: HttpClient) {
    //this.client = createClient('t2eF7KBKAkTmUwbLt8t0pFczFDDajVwVnMeYiH179S7QaskDapUwmZ9L');
    //this.query = 'cakes';
  }

  /*
  //Método oficial según guía de la API
  private client;
  private query;
  getCakeList(page: number): Observable<ErrorResponse | PhotosWithTotalResults> {
    //La función de Pexels es un Promise. La convertimos a Observable.
    return from(this.client.photos.search({
      query: this.query,
      orientation: 'square',
      page: page,
      per_page: 20
    }));
  }
   */

  getCakeList(page: number = 1): Observable<CakeList> {
    return this.http.get<CakeList>('https://api.pexels.com/v1/search', {
        headers: this.headers,
        params: {
          query: 'cakes',
          orientation: 'square',
          page: page,
          per_page: 10
        }
      }
    );
  }

  getCakeDetail(id: string): Observable<Cake> {
    return this.http.get<Cake>('https://api.pexels.com/v1/photos/' + id, {
      headers: this.headers
    });
  }
}
