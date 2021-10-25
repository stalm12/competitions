import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanzenComponent } from './finanzen.component';

describe('FinancesComponent', () => {
  let component: FinanzenComponent;
  let fixture: ComponentFixture<FinanzenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanzenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanzenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
