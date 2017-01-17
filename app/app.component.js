"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.recipes = [
            new Recipe("Pancakes", "eggs, milk, flour, oil, syrup", "Put it in a pan and cook for 2 minutes and each side!"),
            new Recipe("Snickerdoodle", "butter, , eggs, oil, flour, sugar, cinnamon", "Put it in oven at 375 for 10 minutesBake it!"),
            new Recipe("Steak and eggs", "Eggs, milk, onion, bell peppers, steak, worstechire sauce, salt, pepper", "Cook eggs in pan for 5 minutes, Grill steak 6 minutes a side"),
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n  <div class=\"container\">\n    <h1>Recipe Box</h1>\n    <ul *ngFor=\"let currentRecipe of recipes\">\n      <li>{{currentRecipe.title}}</li>\n      <li>{{currentRecipe.ingredients}}</li>\n      <li>{{currentRecipe.instructions}}</li>\n    </ul>\n  </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
var Recipe = (function () {
    function Recipe(title, ingredients, instructions) {
        this.title = title;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
    return Recipe;
}());
exports.Recipe = Recipe;
//# sourceMappingURL=app.component.js.map