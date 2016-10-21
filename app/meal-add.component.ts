import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-add',
  template: `
  <div *ngIf="childSelectedMeal===null">
    <h3>New Meal to Track</h3>
    <div>
      <label>Enter Your Meal: </label>
      <input #newName>
    </div>
    <div>
      <label>Enter Calorie Count: </label>
      <input #newCalories>
    </div>
    <div>
      <label>Enter Extra Details (size, portion eaten, liked/disliked): </label>
      <input #newDetails>
    </div>
    <button (click)="
      addClicked(newName.value, newCalories.value, newDetails.value);
      newName.value='';
      newCalories.values='';
      newDetails.values='';
    ">Add Meal</button>
  </div>
  `
})

export class MealAddComponent {
  @Input() childSelectedMeal: Meal;
  @Output() newMealSender = new EventEmitter();
  addMealClicked(name: string, calories: number, details: string) {
    if((name!=='')&&(calories>0)&&(details!=='')) {
      var newMealToAdd: Meal = new Meal(name, calories, details);
      this.newMealSender.emit(newMealToAdd);
    } else {
      alert("You will need to fill in all fields for this program to properly track all your meals, please.")
    }
  }
}
