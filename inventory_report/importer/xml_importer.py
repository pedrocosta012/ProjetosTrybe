from inventory_report.importer.importer import Importer
from xml.etree import ElementTree as ET
from typing import List


class XmlImporter(Importer):
    @staticmethod
    def import_data(file_dir: str) -> List[dict]:
        if not file_dir.endswith('.xml'):
            raise ValueError('Arquivo inválido')
        with open(file_dir) as file:
            return [
                {line.tag: line.text for line in product}
                for product in ET.parse(file).getroot()
            ]
