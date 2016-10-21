import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div *ngFor="let currentMeal of childMealList">
    <h3>{{ currentMeal.name }}</h3>
    <h4>{{ currentMeal.calories }}</h4>
    <p>{{ currentMeal.details }}</p>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
}
