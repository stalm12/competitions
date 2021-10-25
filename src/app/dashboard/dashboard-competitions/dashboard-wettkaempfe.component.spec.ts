import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWettkaempfeComponent } from './dashboard-wettkaempfe.component';

describe('DashboardCompetitionsComponent', () => {
  let component: DashboardWettkaempfeComponent;
  let fixture: ComponentFixture<DashboardWettkaempfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardWettkaempfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWettkaempfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
