import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  items: Observable <any[]>;

  constructor( private firedb: AngularFireDatabase) {
    this.items = firedb.list('howa').valueChanges();

    this.items.subscribe(data => {
      console.log('hello ', data);
    });


   }
}
