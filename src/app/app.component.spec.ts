import { TestBed, async } from '@angular/core/testing';
import { AngularFireDatabase } from '@angular/fire/database';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DatabaseService } from './core/services/database.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { FireDatabaseDummy } from './core/Tests/Fire-db-dummy';

describe('AppComponent', () => {
  let databaseS;
  let firebaseDatabase;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        ],
      providers:[{provide: AngularFireDatabase, useClass: FireDatabaseDummy}, DatabaseService],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    databaseS = TestBed.inject(DatabaseService);
    firebaseDatabase = TestBed.inject(AngularFireDatabase);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Who cares
  xit(`should have as title 'howalogic'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('howalogic');
  });

  // Again, who the hell cares. Aber cool dass das geht (y)
  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('howalogic app is running!');
  });
});
