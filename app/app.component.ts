import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div>
    <h1>Meal Tracker:</h1>
  </div>
  <meal-list
    [childMealList]="masterMealList"
    (clickSender)="editDetails($event)"
  ></meal-list>
  <meal-add

  ></meal-add>
  <meal-edit
    [childSelectedMeal]="selectedMeal"
    (doneClickedSender)="doneEditing()"
  ></meal-edit>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Toasted O's with Milk", 280, "Two cups of O's and 8oz of 1% milk.")
  ];
  selectedMeal: Meal = null;
  editDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  doneEditing() {
    this.selectedMeal = null;
  }
}
