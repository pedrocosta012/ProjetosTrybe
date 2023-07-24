from typing import Union, List, Dict
from src.insights.jobs import read


def get_max_salary(path: str) -> int:
    max_salary = set([job["max_salary"] for job in read(path)])
    max_salary_formatted = [int(sal) for sal in max_salary if sal.isnumeric()]
    return max(max_salary_formatted)


def get_min_salary(path: str) -> int:
    min_salary = set([job["min_salary"] for job in read(path)])
    min_salary_formatted = [int(sal) for sal in min_salary if sal.isnumeric()]
    return min(min_salary_formatted)


def matches_salary_range(job: Dict, salary: Union[int, str]) -> bool:
    try:
        if int(job["max_salary"]) - int(job["min_salary"]) < 0:
            raise ValueError
        bigger_than_min_salary = int(job["min_salary"]) <= int(salary)
        smaller_than_max_salary = int(job["max_salary"]) >= int(salary)
        return (bigger_than_min_salary and smaller_than_max_salary)
    except (ValueError, TypeError, KeyError):
        raise ValueError


def filter_by_salary_range(
    jobs: List[dict],
    salary: Union[str, int]
) -> List[Dict]:
    valid_jobs = []
    for job in jobs:
        if (
            str(job["min_salary"]).isnumeric()
            ) and (
            str(job["max_salary"]).isnumeric()
            ) and (
            str(salary).isnumeric()
        ):
            if (
                int(job["min_salary"]) <= int(salary)
                ) and (
                int(job["max_salary"]) >= int(salary)
            ):
                valid_jobs.append(job)

    return [job for job in valid_jobs if matches_salary_range(job, salary)]
