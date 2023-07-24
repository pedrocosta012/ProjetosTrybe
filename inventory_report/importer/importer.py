from abc import ABC, abstractmethod
from typing import List


class Importer(ABC):
    @staticmethod
    @abstractmethod
    def import_data(file_dir: str) -> List[dict]:
        pass
