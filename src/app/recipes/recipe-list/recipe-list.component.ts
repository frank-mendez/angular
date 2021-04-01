import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Kare kare',
      'Test kare kare description',
      'https://panlasangpinoy.com/wp-content/uploads/2019/12/kare-kare-recipe-beef-tripe.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
