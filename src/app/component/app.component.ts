import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {Catalog} from "../models/Catalog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'catalog-front';

  catalogs : Array<Catalog> = [];

  constructor(private apiService : ApiService) {
  }

  ngOnInit() {
    this.apiService.getAllCatalogs().subscribe(data => {
      this.catalogs = data;
      console.log(this.catalogs)
    })
  }
}
