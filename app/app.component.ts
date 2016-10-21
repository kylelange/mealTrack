import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="header">
    <h1 id="title">The FINEST Meal Tracker:</h1>
    <h2>(Don't worry, we only judge your metadata.)</h2>
  </div>
  <meal-list
    [childMealList]="masterMealList"
    (clickSender)="editDetails($event)"
  ></meal-list>
  <meal-add
    [childSelectedMeal]="selectedMeal"
    (newMealSender)="addMeal($event)"
  ></meal-add>
  <meal-edit
    [childSelectedMeal]="selectedMeal"
    (doneClickedSender)="doneEditing()"
  ></meal-edit>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Toasted O's with Milk", 280, "Two cups of O's and 8oz of 1% milk."),
    new Meal("A lonely carrot", 40, "Picked streight from my neighbor's garden. Shhhh...."),
    new Meal("'Personal' Pizza", 780, "Ok, so it was just a large pizza I ate myself.")
  ];
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
  selectedMeal: Meal = null;
  editDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  doneEditing() {
    this.selectedMeal = null;
  }
}
