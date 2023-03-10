import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Catalog} from "../models/Catalog";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url : string = "http://localhost:8000/api/"

  constructor(private http: HttpClient) { }

   getAllCatalogs(){
    return this.http.get<Array<Catalog>>(this.url + 'catalog/');
  }
}
