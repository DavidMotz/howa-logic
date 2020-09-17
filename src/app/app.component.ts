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
  systemWahlObj:Rifles[] = [];
  systemWahlStr: string[] = [];
  schaftWahlObj:Rifles[] = [];
  imageSchaft:string;
  imageSystem:string;
  selectedObj:{Kaliber: string, System: string, Schaft: string} = {Kaliber:null, System:null, Schaft:null}

  constructor(public database: DatabaseService, private ref:ChangeDetectorRef){

  }

  selectedCal(name:string){
    this.systemWahlObj = this.database.filterFurther(this.database.currentItems, 'Kaliber', name);
    this.systemWahlStr = this.database.group(this.systemWahlObj, 'System');
    this.selectedObj.Kaliber = name;
    this.schaftWahlObj = [];
    console.log(this.systemWahlObj);
  }

  selectedSys(name:string){

    this.schaftWahlObj = this.database.filterFurther(this.systemWahlObj, 'System', name);
    this.selectedObj.Kaliber = name;
    this.imageSystem = name.substr(1);
    console.log("Ich wurde aufgerufen", this.schaftWahlObj);
    }

  selectedSchaft(name:string){
    console.log("Images wurde aufgerufen");

    this.imageSchaft = name.substr(1);

    console.log("Ausgegeben", this.imageSchaft);

  }


}
