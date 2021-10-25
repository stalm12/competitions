import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorsCardComponent } from './competitors-card.component';

describe('CompetitorsCardComponent', () => {
  let component: CompetitorsCardComponent;
  let fixture: ComponentFixture<CompetitorsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitorsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitorsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
