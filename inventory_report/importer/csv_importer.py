from inventory_report.importer.importer import Importer
from csv import DictReader
from typing import List


class CsvImporter(Importer):
    @staticmethod
    def import_data(file_dir: str) -> List[dict]:
        if not file_dir.endswith('.csv'):
            raise ValueError('Arquivo inválido')
        with open(file_dir) as file:
            return [product for product in DictReader(file)]
