import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeilnehmerCardComponent } from './teilnehmer-card.component';

describe('CompetitorsCardComponent', () => {
  let component: TeilnehmerCardComponent;
  let fixture: ComponentFixture<TeilnehmerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeilnehmerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeilnehmerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
