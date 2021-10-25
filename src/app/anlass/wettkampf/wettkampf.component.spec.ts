import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WettkampfComponent } from './wettkampf.component';

describe('CompetitionComponent', () => {
  let component: WettkampfComponent;
  let fixture: ComponentFixture<WettkampfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WettkampfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WettkampfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
