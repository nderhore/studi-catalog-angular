import {Product} from "./Product";

export class Catalog{
  private _catalog_id : number = 0;
  private _libelle : string = ''
  private _date_debut : Date = new Date()
  private _date_fin : Date = new Date()
  private _products : Array<Product> = []


  constructor(data: any) {
    this._catalog_id = data.catalog_id;
    this._libelle = data.libelle;
    this._date_debut = data.date_debut;
    this._date_fin = data.date_fin;
    this._products = data.products;
  }



  get catalog_id(): number {
    return this._catalog_id;
  }

  set catalog_id(value: number) {
    this._catalog_id = value;
  }

  get libelle(): string {
    return this._libelle;
  }

  set libelle(value: string) {
    this._libelle = value;
  }

  get date_debut(): Date {
    return this._date_debut;
  }

  set date_debut(value: Date) {
    this._date_debut = value;
  }

  get date_fin(): Date {
    return this._date_fin;
  }

  set date_fin(value: Date) {
    this._date_fin = value;
  }

  get products(): Array<Product> {
    return this._products;
  }

  set products(value: Array<Product>) {
    this._products = value;
  }
}
