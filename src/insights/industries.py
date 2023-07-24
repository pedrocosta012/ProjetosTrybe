from typing import List, Dict
from src.insights.jobs import read


def get_unique_industries(path: str) -> List[str]:
    ind = set([job["industry"] for job in read(path) if job["industry"] != ''])
    return ind


def filter_by_industry(jobs: List[Dict], industry: str) -> List[Dict]:
    return [job for job in jobs if job["industry"] == industry]
