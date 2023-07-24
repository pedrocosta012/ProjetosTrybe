from ting_file_management.priority_queue import PriorityQueue
from pytest import raises


def test_basic_priority_queueing():
    priority_queue = PriorityQueue()
    inp = [
        {
            "name": "file1",
            "qtd_linhas": 9
        },
        {
            "name": "file2",
            "qtd_linhas": 4
        },
        {
            "name": "file3",
            "qtd_linhas": 2
        },
        {
            "name": "file4",
            "qtd_linhas": 5
        },
        {
            "name": "file5",
            "qtd_linhas": 7
        },
        {
            "name": "file6",
            "qtd_linhas": 11
        },
        {
            "name": "file7",
            "qtd_linhas": 3
        }
    ]

    out = [
        {
            "name": "file2",
            "qtd_linhas": 4
        },
        {
            "name": "file3",
            "qtd_linhas": 2
        },
        {
            "name": "file7",
            "qtd_linhas": 3
        },
        {
            "name": "file1",
            "qtd_linhas": 9
        },
        {
            "name": "file4",
            "qtd_linhas": 5
        },
        {
            "name": "file5",
            "qtd_linhas": 7
        },
        {
            "name": "file6",
            "qtd_linhas": 11
        },
    ]

    quantity_to_remove = 3

    [priority_queue.enqueue(item) for item in inp]

    with raises(IndexError):
        priority_queue.search(22)

    try:
        for i, item in enumerate(out):
            assert priority_queue.search(i) == item

        [priority_queue.dequeue() for _ in range(quantity_to_remove)]

        assert len(priority_queue) == len(inp) - quantity_to_remove

        for i, item in enumerate(out[quantity_to_remove:]):
            assert priority_queue.search(i) == item
    except IndexError:
        assert False
