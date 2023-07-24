from src.pre_built.counter import count_ocurrences


def test_counter():
    result = count_ocurrences('data/jobs.csv', 'time')
    assert result == 7331
    assert isinstance(result, int)
