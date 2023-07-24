from src.pre_built.sorting import sort_by


def test_sort_by_criteria():
    pass
    # input para todos os testes
    jobs_list_input = [
        {
            'max_salary': 100,
            'min_salary': 10,
            'date_posted': '2023-02-19'
        }, {
            'max_salary': 1010,
            'min_salary': 100,
            'date_posted': '2022-02-25'
        }, {
            'max_salary': 1290,
            'min_salary': 433,
            'date_posted': '2022-09-19'
        }, {
            'max_salary': 2180,
            'min_salary': 418,
            'date_posted': '2022-05-29'
        }, {
            'max_salary': 3100,
            'min_salary': 756,
            'date_posted': '2022-10-16'
        }, {
            'max_salary': 1210,
            'min_salary': 792,
            'date_posted': '2022-11-16'
        }, {
            'max_salary': 3130,
            'min_salary': 2058,
            'date_posted': '2022-04-21'
        }, {
            'max_salary': 15600,
            'min_salary': 2689,
            'date_posted': '2022-09-30'
        }, {
            'max_salary': 13840,
            'min_salary': 3986,
            'date_posted': '2022-05-15'
        }, {
            'max_salary': 16482,
            'min_salary': 2097,
            'date_posted': '2022-04-09'
        }
    ]

    # Como o array de ficar ao ser ordenado por "max_salary"
    jobs_sorted_by_max_salary = [
        {
            'max_salary': 16482,
            'min_salary': 2097,
            'date_posted': '2022-04-09'
        }, {
            'max_salary': 15600,
            'min_salary': 2689,
            'date_posted': '2022-09-30'
        }, {
            'max_salary': 13840,
            'min_salary': 3986,
            'date_posted': '2022-05-15'
        }, {
            'max_salary': 3130,
            'min_salary': 2058,
            'date_posted': '2022-04-21'
        }, {
            'max_salary': 3100,
            'min_salary': 756,
            'date_posted': '2022-10-16'
        }, {
            'max_salary': 2180,
            'min_salary': 418,
            'date_posted': '2022-05-29'
        }, {
            'max_salary': 1290,
            'min_salary': 433,
            'date_posted': '2022-09-19'
        }, {
            'max_salary': 1210,
            'min_salary': 792,
            'date_posted': '2022-11-16'
        }, {
            'max_salary': 1010,
            'min_salary': 100,
            'date_posted': '2022-02-25'
        }, {
            'max_salary': 100,
            'min_salary': 10,
            'date_posted': '2023-02-19'
        }
    ]

    sort_by(jobs_list_input, 'max_salary')
    assert jobs_list_input == jobs_sorted_by_max_salary

    # Como o array de ficar ao ser ordenado por "min_salary"
    jobs_sorted_by_min_salary = [
        {
            'max_salary': 100,
            'min_salary': 10,
            'date_posted': '2023-02-19',
        }, {
            'max_salary': 1010,
            'min_salary': 100,
            'date_posted': '2022-02-25',
        }, {
            'max_salary': 2180,
            'min_salary': 418,
            'date_posted': '2022-05-29',
        }, {
            'max_salary': 1290,
            'min_salary': 433,
            'date_posted': '2022-09-19',
        }, {
            'max_salary': 3100,
            'min_salary': 756,
            'date_posted': '2022-10-16',
        }, {
            'max_salary': 1210,
            'min_salary': 792,
            'date_posted': '2022-11-16',
        }, {
            'max_salary': 3130,
            'min_salary': 2058,
            'date_posted': '2022-04-21',
        }, {
            'max_salary': 16482,
            'min_salary': 2097,
            'date_posted': '2022-04-09',
        }, {
            'max_salary': 15600,
            'min_salary': 2689,
            'date_posted': '2022-09-30',
        }, {
            'max_salary': 13840,
            'min_salary': 3986,
            'date_posted': '2022-05-15',
        }
    ]

    sort_by(jobs_list_input, 'min_salary')
    assert jobs_list_input == jobs_sorted_by_min_salary

    # Como o array de ficar ao ser ordenado por "date_posted"
    jobs_sorted_by_date = [
        {
            'max_salary': 100,
            'min_salary': 10,
            'date_posted': '2023-02-19',
        }, {
            'max_salary': 1210,
            'min_salary': 792,
            'date_posted': '2022-11-16',
        }, {
            'max_salary': 3100,
            'min_salary': 756,
            'date_posted': '2022-10-16',
        }, {
            'max_salary': 15600,
            'min_salary': 2689,
            'date_posted': '2022-09-30',
        }, {
            'max_salary': 1290,
            'min_salary': 433,
            'date_posted': '2022-09-19',
        }, {
            'max_salary': 2180,
            'min_salary': 418,
            'date_posted': '2022-05-29',
        }, {
            'max_salary': 13840,
            'min_salary': 3986,
            'date_posted': '2022-05-15',
        }, {
            'max_salary': 3130,
            'min_salary': 2058,
            'date_posted': '2022-04-21',
        }, {
            'max_salary': 16482,
            'min_salary': 2097,
            'date_posted': '2022-04-09',
        }, {
            'max_salary': 1010,
            'min_salary': 100,
            'date_posted': '2022-02-25',
        }
    ]

    sort_by(jobs_list_input, 'date_posted')
    assert jobs_list_input == jobs_sorted_by_date
