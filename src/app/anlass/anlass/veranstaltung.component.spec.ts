import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeranstaltungComponent } from './veranstaltung.component';

describe('EventComponent', () => {
  let component: VeranstaltungComponent;
  let fixture: ComponentFixture<VeranstaltungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeranstaltungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeranstaltungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
