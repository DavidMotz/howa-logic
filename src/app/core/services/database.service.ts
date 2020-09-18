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
      this.filteredItems = this.group(this.currentItems, 'Kaliber');
      console.log(this.filteredItems);

    });



   }

   filterFurther(originalArr:Rifles[], key:string, value: string):Rifles[]{
    return originalArr.filter(x => {
      for(let [i, c] of Object.entries(x)){
        if (i ===  key && value === c)
        return true;
      }
    })
   }

   group(originalArr:Rifles[], key:string):string[]{
     let returnArr = [];
     for(let i of originalArr){
      returnArr.includes(i[key]) ? undefined : returnArr.push(i[key]);
    }
    return returnArr;
   }


}
