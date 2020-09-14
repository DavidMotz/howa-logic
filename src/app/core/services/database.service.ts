import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Rifles } from '../interface/rifles';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  items: Observable <any[]>;
  currentItems: Rifles[] = [];
  filteredItems = [];
  constructor( private firedb: AngularFireDatabase) {
    this.items = firedb.list('howa').valueChanges();

    this.items.subscribe(data => {
      console.log('hello ', data);
      this.currentItems = data;
      for(let i of this.currentItems){
        this.filteredItems.includes(i.Kaliber) ? undefined : this.filteredItems.push(i.Kaliber);
      }
      console.log(this.filteredItems);

    });



   }
}
