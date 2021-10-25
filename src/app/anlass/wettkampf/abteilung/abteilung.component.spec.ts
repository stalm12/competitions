import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbteilungComponent } from './abteilung.component';

describe('DivisionComponent', () => {
  let component: AbteilungComponent;
  let fixture: ComponentFixture<AbteilungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbteilungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbteilungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
