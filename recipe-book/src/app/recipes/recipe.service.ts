import { Injectable } from '@angular/core';
import { Recipe } from "./recipe";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Pasta Alla Amatriciana', 'Delicioso', 'http://www.seriouseats.com/recipes/assets_c/2011/02/20110217-127355-dinner-tonight-pasta-all-amatriciana-thumb-625xauto-141251.jpg', []),
        new Recipe('Detroit Style Pizza', 'Ooey Gooey', 'http://www.seriouseats.com/recipes/assets_c/2017/02/20170216-detroit-style-pizza-43-thumb-1500xauto-436479.jpg', []),
    ];
  constructor() { }

  getRecipes(){
    return this.recipes;
  }

}
