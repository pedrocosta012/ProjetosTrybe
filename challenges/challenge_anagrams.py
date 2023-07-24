def is_anagram(first_string: str, second_string: str):
    if (
        not isinstance(first_string, str)
    ) or (
        not isinstance(second_string, str)
    ):
        return False

    first_string_sorted = string_sorter(first_string.lower())
    second_string_sorted = string_sorter(second_string.lower())

    if len(first_string_sorted) != len(second_string_sorted):
        return (
            first_string_sorted,
            second_string_sorted,
            False
        )
    if not (len(first_string_sorted) and len(second_string_sorted)):
        return (
            first_string_sorted,
            second_string_sorted,
            False
        )

    return (
        first_string_sorted,
        second_string_sorted,
        first_string_sorted == second_string_sorted
    )


def string_sorter(string: str):
    if len(string) <= 1:
        return string

    mid = len(string) // 2
    left_half = string[:mid]
    right_half = string[mid:]

    left_half = string_sorter(left_half)
    right_half = string_sorter(right_half)

    return merge(left_half, right_half)


def merge(left, right):
    result = ''
    i, j = 0, 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result += left[i]
            i += 1
        else:
            result += right[j]
            j += 1

    result += left[i:]
    result += right[j:]

    return result
