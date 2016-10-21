import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component';
import { MealEditComponent } from './meal-edit.component';
import { MealAddComponent } from './meal-add.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MealListComponent,
    MealEditComponent,
    MealAddComponent,
    FilterPipe,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
