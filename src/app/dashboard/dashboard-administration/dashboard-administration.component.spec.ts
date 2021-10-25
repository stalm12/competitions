import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdministrationComponent } from './dashboard-administration.component';

describe('DashboardAdministrationComponent', () => {
  let component: DashboardAdministrationComponent;
  let fixture: ComponentFixture<DashboardAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
