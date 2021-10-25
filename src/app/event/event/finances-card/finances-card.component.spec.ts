import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancesCardComponent } from './finances-card.component';

describe('FinancesCardComponent', () => {
  let component: FinancesCardComponent;
  let fixture: ComponentFixture<FinancesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
