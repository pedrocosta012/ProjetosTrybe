from src.models.ingredient import Restriction
from src.models.ingredient import Ingredient
from src.models.dish import Dish
from pytest import raises


# Req 2
def test_dish():
    pizza = Dish('Pizza', 27.50)
    caldo_carne = Dish('Caldo', 20)
    caldo_tofu = Dish('Caldo', 20)

    with raises(TypeError):
        Dish('Sanduíche', "R$17.50")
    with raises(ValueError):
        Dish('Sanduíche', 0)

    carne = Ingredient('carne')
    caldo_carne.add_ingredient_dependency(carne, 2)

    assert pizza.name == 'Pizza'
    assert pizza.price == 27.50
    assert carne in caldo_carne.get_ingredients()
    assert (
        set([Restriction.ANIMAL_DERIVED, Restriction.ANIMAL_MEAT])
    ) == caldo_carne.get_restrictions()
    assert repr(pizza) == "Dish('Pizza', R$27.50)"
    assert hash(caldo_carne) == hash(caldo_tofu)
    assert hash(caldo_carne) != hash(pizza)
    assert repr(caldo_carne) == repr(caldo_tofu)
    assert caldo_carne == caldo_tofu
