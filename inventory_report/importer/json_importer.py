from inventory_report.importer.importer import Importer
from typing import List
from json import load


class JsonImporter(Importer):
    @staticmethod
    def import_data(file_dir: str) -> List[dict]:
        if not file_dir.endswith('.json'):
            raise ValueError('Arquivo inválido')
        with open(file_dir) as file:
            return load(file)
