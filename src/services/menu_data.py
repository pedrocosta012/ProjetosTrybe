from src.models.ingredient import Ingredient
from src.models.dish import Dish
import csv


# Req 3
class MenuData:
    def __init__(self, source_path: str) -> None:
        self.dishes: list[Dish] = []

        with open(source_path, 'r', encoding='utf-8') as csv_file:
            for dish in csv.DictReader(csv_file):
                prato = Dish(dish['dish'], float(dish['price']))
                item = None

                if prato in self.dishes:
                    item = self.dishes[self.dishes.index(prato)]
                else:
                    self.dishes.append(prato)
                    item = self.dishes[-1]

                ingredient = Ingredient(dish['ingredient'])
                quantity = int(dish['recipe_amount'])

                item.add_ingredient_dependency(
                    ingredient,
                    quantity
                )

        self.dishes: set[Dish] = set(self.dishes)
