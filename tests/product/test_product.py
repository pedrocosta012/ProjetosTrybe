from inventory_report.inventory.product import Product


def test_cria_produto():
    product = Product(
        1,
        'Bar do Zé Birita',
        'suco de cevada',
        '2022-07-06',
        '2023-06-16',
        'RA65',
        'Freezer'
    )

    assert product.data_de_validade == '2023-06-16'
    assert product.instrucoes_de_armazenamento == 'Freezer'
