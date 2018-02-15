import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output () recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5k5rwsHzOiMTp2g0pn8gN2M93EVAaOs18Yl3sC1TdxI8OMVHA'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://static.pexels.com/photos/793759/pexels-photo-793759.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }
onRecipeSelected(recipe: Recipe){
  this.recipeWasSelected.emit(recipe);
}
}
