from pandas import DataFrame
from src.models.ingredient import Restriction

from services.inventory_control import InventoryMapping
from services.menu_data import MenuData

DATA_PATH = "data/menu_base_data.csv"
INVENTORY_PATH = "data/inventory_base_data.csv"


class MenuBuilder:
    def __init__(self, data_path=DATA_PATH, inventory_path=INVENTORY_PATH):
        self.menu_data = MenuData(data_path)
        self.inventory = InventoryMapping(inventory_path)

    def make_order(self, dish_name: str):
        try:
            curr_dish = [
                dish
                for dish in self.menu_data.dishes
                if dish.name == dish_name
            ][0]
        except IndexError:
            raise ValueError("Dish does not exist")

        self.inventory.consume_recipe(curr_dish.recipe)

    # Req 4
    def get_main_menu(self, restriction=None) -> DataFrame:
        menu_data = [
            {
                'dish_name': dish.name,
                'price': dish.price,
                'ingredients': list(dish.get_ingredients()),
                'restrictions': list(dish.get_restrictions())
            }
            for dish in self.menu_data.dishes
            if set(self.inventory.inventory.keys()).issuperset(
                dish.get_ingredients())
        ]

        if restriction not in list(Restriction):
            return DataFrame(menu_data)
        return DataFrame([
            dish
            for dish in menu_data
            if restriction not in dish['restrictions']
        ])
