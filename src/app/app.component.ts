import { Component } from '@angular/core';
import rifles from '../assets/list.json';
import {DatabaseService} from './core/services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'howalogic';

  constructor(private database: DatabaseService){

  }

}
