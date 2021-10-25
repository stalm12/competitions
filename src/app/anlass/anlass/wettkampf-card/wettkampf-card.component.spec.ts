import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WettkampfCardComponent } from './wettkampf-card.component';

describe('CompetitionCardComponent', () => {
  let component: WettkampfCardComponent;
  let fixture: ComponentFixture<WettkampfCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WettkampfCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WettkampfCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
