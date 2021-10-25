import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatCardComponent } from './resultat-card.component';

describe('ResultsCardComponent', () => {
  let component: ResultatCardComponent;
  let fixture: ComponentFixture<ResultatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
