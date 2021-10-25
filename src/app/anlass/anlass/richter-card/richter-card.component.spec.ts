import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichterCardComponent } from './richter-card.component';

describe('JudgesCardComponent', () => {
  let component: RichterCardComponent;
  let fixture: ComponentFixture<RichterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RichterCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RichterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
