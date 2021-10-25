import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeranstaltungDetailComponent } from './veranstaltung-detail.component';

describe('EventDetailComponent', () => {
  let component: VeranstaltungDetailComponent;
  let fixture: ComponentFixture<VeranstaltungDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeranstaltungDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeranstaltungDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
