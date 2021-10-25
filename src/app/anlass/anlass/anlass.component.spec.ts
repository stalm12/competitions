import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnlassComponent } from './anlass.component';

describe('EventComponent', () => {
  let component: AnlassComponent;
  let fixture: ComponentFixture<AnlassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnlassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
