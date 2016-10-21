import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform (input: Meal[], meal) {
    var output: Meal[] = []
    //conditional statement here
  }
}
