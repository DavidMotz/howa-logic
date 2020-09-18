import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class FireDatabaseDummy{


  list(path?: string, querry?: string) : FireListDummy {
    return new FireListDummy();
  }
}

export class FireListDummy{
  automatingTestingData = ['Kaliber', 'Schaft-Img', 'Schaft', 'Sys-Image', 'System'];
  dummyData : [{Kaliber: string , 'Schaft-Img': string, Schaft: string, 'Sys-Image': string, System: string}] = [undefined];
  constructor(){
    this.dummyData = [{
      Kaliber: '.204 Ruger',
      'Schaft-Img': 's6',
      Schaft: 'Hogue Pillar Bedding olivgrün',
      "Sys-Image": 's6',
      System: '24“ Lauf – 12“ Drall – Cerakote m. stainless Optik Short Action / Heavy Barrel',
    }]
  }
  valueChanges(){
    return of(this.dummyData);
  }
}
