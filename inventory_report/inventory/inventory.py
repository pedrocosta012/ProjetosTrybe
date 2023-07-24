from csv import DictReader
from json import load
from xml.etree import ElementTree as ET
from typing import List
from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport


class Inventory:
    @staticmethod
    def file_data_to_dict_list(file_dir: str):
        with open(file_dir) as file:
            if file_dir.endswith('.csv'):
                return [product for product in DictReader(file)]
            elif file_dir.endswith('.json'):
                return load(file)
            elif file_dir.endswith('.xml'):
                return [
                    {line.tag: line.text for line in product}
                    for product in ET.parse(file).getroot()
                ]

    @staticmethod
    def report(data: List[dict], report_type: str):
        if report_type.lower() == 'simples':
            return SimpleReport.generate(data)
        elif report_type.lower() == 'completo':
            return CompleteReport.generate(data)
        else:
            return None

    @staticmethod
    def import_data(file_dir: str, report_type: str):
        product_list = Inventory.file_data_to_dict_list(file_dir)
        if product_list is not None:
            return Inventory.report(product_list, report_type)
        else:
            return product_list
