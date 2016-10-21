import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div>
    <h4>Filter by...</h4>
    <select (change)="onChange($event.target.value)" id="filter-select">
      <option value="All" selected="selected">All Meals</option>
      <option value="Low Cal" >Low Calorie</option>
      <option value="Med Cal" >Med Calorie</option>
      <option value="High Cal" >High Calorie</option>
    </select>
  </div>
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
  public selectedFilter: string = "All";
  onChange(optionFromMenu) {
    this.selectedFilter = optionFromMenu;
    console.log(this.selectedFilter);
  }
  editButtonClick(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);

  }
}
