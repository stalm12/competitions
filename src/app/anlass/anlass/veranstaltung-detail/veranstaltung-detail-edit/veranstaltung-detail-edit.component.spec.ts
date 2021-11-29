import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeranstaltungDetailEditComponent } from './veranstaltung-detail-edit.component';

describe('VeranstaltungDetailEditComponent', () => {
  let component: VeranstaltungDetailEditComponent;
  let fixture: ComponentFixture<VeranstaltungDetailEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeranstaltungDetailEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeranstaltungDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
