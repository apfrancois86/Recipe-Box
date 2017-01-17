import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <ul *ngFor="let currentRecipe of recipes">
      <li>{{currentRecipe.title}}</li>
      <li>{{currentRecipe.ingredients}}</li>
      <li>{{currentRecipe.instructions}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe("Pancakes", "eggs, milk, flour, oil, syrup", "Put it in a pan and cook for 2 minutes and each side!"),
    new Recipe("Snickerdoodle", "butter, , eggs, oil, flour, sugar, cinnamon", "Put it in oven at 375 for 10 minutesBake it!"),
    new Recipe("Steak and eggs", "Eggs, milk, onion, bell peppers, steak, worstechire sauce, salt, pepper", "Cook eggs in pan for 5 minutes, Grill steak 6 minutes a side"),
  ];
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public instructions: string) { }
}
