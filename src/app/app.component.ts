import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import rifles from '../assets/list.json';
import { Rifles } from './core/interface/rifles';
import {DatabaseService} from './core/services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  title = 'howalogic';
  systemWahlObj: Rifles[] = [];
  systemWahlStr: string[] = [];
  schaftWahlObj: Rifles[] = [];
  imageSchaft: string;
  imageSystem: string;
  selectedObj: {Kaliber: string, System: string, Schaft: string} = {Kaliber: null, System: null, Schaft: null};

  constructor(public database: DatabaseService, private ref: ChangeDetectorRef){
  }

  selectedCal(name: string){
    this.systemWahlObj = this.database.filterFurther(this.database.currentItems, 'Kaliber', name);
    this.systemWahlStr = this.database.group(this.systemWahlObj, 'System');
    this.selectedObj.Kaliber = name;
    this.schaftWahlObj = [];
    this.imageSchaft = null;
    this.imageSystem = null;
  }

  selectedSys(name: string){

    this.schaftWahlObj = this.database.filterFurther(this.systemWahlObj, 'System', name);
    this.selectedObj.Kaliber = name;
    this.imageSchaft = null;
    const rueckgabe = this.findObj(this.systemWahlObj, 'System', name);
    if (rueckgabe){
      this.imageSystem = rueckgabe['Sys-Image'].substr(1);

    }
  }

  selectedSchaft(name: Rifles){
    console.log('Images wurde aufgerufen');

    this.imageSchaft = name['Sch-Image'].substr(1);
    this.imageSystem = name['Sys-Image'].substr(1);

    console.log('Ausgegeben', this.imageSchaft);

  }

  findObj(rifleArr: Rifles[], key: string, value: string){
    console.log('findObj ausgegeben');
    console.log(rifleArr, key, value);

    return rifleArr.find(rifle => {
      if (rifle[key] === value){
        console.log('found');
        return true;
      }
      return false;
    });
  }

}
