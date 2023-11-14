import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultySliderComponent } from './difficulty-slider.component';

describe('DifficultySliderComponent', () => {
  let component: DifficultySliderComponent;
  let fixture: ComponentFixture<DifficultySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifficultySliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifficultySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
