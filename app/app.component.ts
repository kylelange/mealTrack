import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div>
    <h1>Meal Tracker:</h1>
  </div>
  <meal-list

  ></meal-list>
  <meal-edit

  ></meal-edit>
  <meal-add

  ></meal-add>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Toasted O's with Milk", 280, "Two cups of O's and 8oz of 1% milk.")
  ];
}
