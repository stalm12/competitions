import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanzenCardComponent } from './finanzen-card.component';

describe('FinancesCardComponent', () => {
  let component: FinanzenCardComponent;
  let fixture: ComponentFixture<FinanzenCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanzenCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanzenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
