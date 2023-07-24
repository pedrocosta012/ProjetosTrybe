from inventory_report.inventory.product import Product


def test_relatorio_produto():
    product = Product(
        1,
        'Banana',
        'Hortifrúti Dev',
        '2023-02-28',
        '2023-03-10',
        'PB39',
        'Local fresco e arejado'
    )
    assert repr(product) == (
        "O produto Banana"
        " fabricado em 2023-02-28"
        " por Hortifrúti Dev com validade"
        " até 2023-03-10"
        " precisa ser armazenado Local fresco e arejado."
    )
