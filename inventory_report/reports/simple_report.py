from datetime import datetime


class SimpleReport:
    @staticmethod
    def find_oldest_product(fabrications: list):
        return datetime.strftime(sorted(fabrications)[0], "%Y-%m-%d")

    @staticmethod
    def find_latest_expiration(expiries: list):
        return datetime.strftime(sorted(expiries)[0], "%Y-%m-%d")

    @staticmethod
    def find_business_with_more_products(arr_business: list):
        business_result = arr_business[0]
        biggest_repetitions = 0

        for unique_business in set(arr_business):
            repetitions = 0

            for business in arr_business:
                if business.upper() == unique_business.upper():
                    repetitions += 1

            if repetitions > biggest_repetitions:
                business_result = unique_business
                biggest_repetitions = repetitions

        return business_result

    @staticmethod
    def generate(products: list) -> str:
        fabrication = SimpleReport.find_oldest_product(
            [
                datetime.strptime(product["data_de_fabricacao"], "%Y-%m-%d")
                for product in products
            ]
        )

        data_atual = datetime.now()

        expiry = SimpleReport.find_latest_expiration(
            [
                datetime.strptime(product["data_de_validade"], "%Y-%m-%d")
                for product in products
                if datetime.strptime(
                    product["data_de_validade"], "%Y-%m-%d"
                ) >= data_atual
            ]
        )

        business_with_more_products = (
            SimpleReport.find_business_with_more_products(
                [product['nome_da_empresa'] for product in products]
            )
        )

        return f"""Data de fabricação mais antiga: {fabrication}
Data de validade mais próxima: {expiry}
Empresa com mais produtos: {business_with_more_products}"""
