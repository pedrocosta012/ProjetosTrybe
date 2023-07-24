from typing import List, Dict
from inventory_report.reports.simple_report import SimpleReport


class CompleteReport(SimpleReport):
    @staticmethod
    def generate(products: List[Dict]) -> str:
        partial_result = SimpleReport.generate(products)
        products_by_business = {}

        for product in products:
            if product['nome_da_empresa'] in products_by_business:
                products_by_business[product['nome_da_empresa']] += 1
            else:
                products_by_business[product['nome_da_empresa']] = 1

        keys = list(products_by_business.keys())
        values = list(products_by_business.values())
        result = 'Produtos estocados por empresa:\n'

        for index, key in enumerate(keys):
            result += f'- {key}: {values[index]}\n'

        result = f'{partial_result}\n{result}'

        return result
