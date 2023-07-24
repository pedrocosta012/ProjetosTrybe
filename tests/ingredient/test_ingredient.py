from src.models.ingredient import Ingredient


# Req 1
def test_ingredient():
    feijão1 = Ingredient('feijão')
    feijão2 = Ingredient('feijão')
    arroz = Ingredient('arroz')

    assert hash(feijão1) == hash(feijão2)
    assert hash(feijão2) != hash(arroz)
    assert repr(feijão1) == repr(feijão2)
    assert repr(feijão2) != repr(arroz)
    assert repr(feijão1) == "Ingredient('feijão')"
    assert feijão1.name == 'feijão'
    assert feijão1.restrictions == set()
    assert feijão1 == feijão2
    assert feijão2 != arroz
