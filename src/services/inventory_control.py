from csv import DictReader
from typing import Dict

from src.models.dish import Recipe
from src.models.ingredient import Ingredient

BASE_INVENTORY = "data/inventory_base_data.csv"

Inventory = Dict[Ingredient, int]


def read_csv_inventory(inventory_file_path=BASE_INVENTORY) -> Dict:
    inventory = dict()

    with open(inventory_file_path, encoding="utf-8") as file:
        for row in DictReader(file):
            ingredient = Ingredient(row["ingredient"])
            inventory[ingredient] = int(row["initial_amount"])

    return inventory


# Req 5
class InventoryMapping:
    def __init__(self, inventory_file_path=BASE_INVENTORY) -> None:
        self.inventory = read_csv_inventory(inventory_file_path)

    # Req 5.1
    def check_recipe_availability(self, recipe: Recipe):
        ingredients = set(recipe.keys())
        if set(self.inventory.keys()).issuperset(ingredients):
            all_available_ingredients = True
            for ingredient in ingredients:
                if recipe[ingredient] > self.inventory[ingredient]:
                    all_available_ingredients = False

            return all_available_ingredients

        return False

    # Req 5.2
    def consume_recipe(self, recipe: Recipe) -> None:
        if self.check_recipe_availability(recipe):
            ingredients = list(recipe.keys())

            for ingredient in ingredients:
                self.inventory[ingredient] -= recipe[ingredient]

            return
        raise ValueError
