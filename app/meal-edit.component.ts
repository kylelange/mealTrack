import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-edit',
  template: `
  <div *ngIf="childSelectedMeal">
  <h3>Edit Meal</h3>
    <div>
      <label>New Meal Name:</label>
      <input [(ngModel)]="childSelectedMeal.name">
    </div>
    <div>
      <label>New Calorie Count:</label>
      <input [(ngModel)]="childSelectedMeal.calories">
    </div>
    <div>
        <label>New Details:</label>
        <input [(ngModel)]="childSelectedMeal.details">
        <button (click)="doneClicked()">Done</button>
    </div>
  </div>
  `
})

export class MealEditComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
