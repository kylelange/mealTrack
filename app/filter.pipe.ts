import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform (input: Meal[], meal) {
    var output: Meal[] = []
    if (meal === "Low Cal") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories <= 100) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (meal === "Med Cal") {
      for (var j = 0; j < input.length; j++) {
        if (input[i].calories <= 400) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (meal === "High Cal") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 401) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
