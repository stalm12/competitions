import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVeranstaltungenComponent } from './dashboard-veranstaltungen.component';

describe('DashboardCompetitionsComponent', () => {
  let component: DashboardVeranstaltungenComponent;
  let fixture: ComponentFixture<DashboardVeranstaltungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardVeranstaltungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardVeranstaltungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
