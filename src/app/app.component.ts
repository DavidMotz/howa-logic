import { Component } from '@angular/core';
import rifles from '../assets/list.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'howalogic';

  constructor(){
    console.log(rifles[0]);
  }

}
