import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultateComponent } from './resultate.component';

describe('ResultsComponent', () => {
  let component: ResultateComponent;
  let fixture: ComponentFixture<ResultateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
