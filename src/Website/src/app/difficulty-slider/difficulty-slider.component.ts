import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR  } from '@angular/forms';
import { Difficutly } from '../shared/services/api';
import { getDifficultyText } from '../session/session-util';

type NullableDifficulty = Difficutly | null | undefined;

@Component({
  selector: 'app-difficulty-slider',
  templateUrl: './difficulty-slider.component.html',
  styleUrls: ['./difficulty-slider.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DifficultySliderComponent),
      multi: true
    }
  ]
})
export class DifficultySliderComponent implements ControlValueAccessor {

  displayText: string = "no difficulty assigned";

  @Input() difficulty: NullableDifficulty = null;
  @Output() difficultyChange = new EventEmitter<NullableDifficulty>();

  propagateChange = (_: any) => {};

  writeValue(value: any): void {
    this.setDifficulty(value);
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    /* nothing to do */
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  public setDifficultyValue(event: Event) {
    this.displayText = "";

    if (event.target === null)
      return;

    const slider: HTMLInputElement = event.target as HTMLInputElement;
    const newDifficultyValue: number = parseInt(slider.value);
    
    const oldDifficultyValue = this.difficulty?.difficulty ?? 0;
    this.setDifficulty(newDifficultyValue);
    if (oldDifficultyValue != newDifficultyValue) {
      this.difficultyChange.emit(this.difficulty);
      this.propagateChange(this.difficulty);
    }
  }

  setDifficulty(difficulty: number): void;
  setDifficulty(difficulty: NullableDifficulty): void;
  setDifficulty(difficulty: number | NullableDifficulty): void {
    let value = 0;
    if (typeof difficulty == 'number') {
      value = difficulty;
    } else {
      value = difficulty?.difficulty ?? 0;
    }

    if (value <= 0) {
      this.difficulty = null;
    } else {
      this.difficulty = { difficulty: value };
    }
    this.displayText = getDifficultyText(value);
  }
}
