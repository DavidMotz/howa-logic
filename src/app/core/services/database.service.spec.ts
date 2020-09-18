import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from 'src/app/app.component';
import { environment } from 'src/environments/environment';
import { Rifles } from '../interface/rifles';

import { DatabaseService } from './database.service';

describe('DatabaseService', () => {
  let firebaseDatabase;
  let service: DatabaseService;

  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          AngularFireModule.initializeApp(environment.firebaseConfig),
          ],
        providers:[AngularFireDatabase],
        declarations: [
          AppComponent
        ],
      }).compileComponents();
      service = TestBed.inject(DatabaseService);
      firebaseDatabase = TestBed.inject(AngularFireDatabase);
    });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Grouping Function', ()=>{
    const bspArray: Rifles[] = [
      {Schaft: 'hello'},
      {Schaft: 'hello'},
      {Schaft: 'test'},
      {Schaft: 'Hello', System: 'Hier das nicht'},
      { Schaft: 'hello'},
      { Schaft: 'Test'}
    ];
    expect(service.group(bspArray, 'Schaft')).toEqual(['hello', 'test', 'Hello', 'Test']);
  });
});
