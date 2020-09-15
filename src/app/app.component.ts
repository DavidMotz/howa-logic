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
    console.log("Ich wurde aufgerufen", this.schaftWahlObj);
    }


}
