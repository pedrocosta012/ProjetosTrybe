def is_palindrome_iterative(word: str):
    left = ''
    right = ''
    mid = len(word) // 2

    if not word:
        return False
    elif len(word) % 2 == 0:
        left = word[:mid]
        right = word[mid:]
    elif len(word) % 2 == 1:
        left = word[:mid]
        right = word[mid + 1:]

    return left == string_reverse(right)


def string_reverse(string: str):
    result = ''
    index = len(string) - 1

    while index >= 0:
        result += string[index]
        index -= 1

    return result
