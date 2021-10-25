import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVereinComponent } from './dashboard-verein.component';

describe('DashboardAssociationComponent', () => {
  let component: DashboardVereinComponent;
  let fixture: ComponentFixture<DashboardVereinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardVereinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardVereinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
