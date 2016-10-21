import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div *ngFor="let currentMeal of childMealList">
    <h3>{{"Meal: " + currentMeal.name }}</h3>
    <h4>{{ "Calores: " + currentMeal.calories }}</h4>
    <p>{{ "Details: " + currentMeal.details }}</p>
    <button (click)="editButtonClick(currentMeal)">Edit</button>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonClick(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
    
  }
}
