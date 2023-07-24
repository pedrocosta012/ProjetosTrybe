def is_palindrome_recursive(word, low_index=None, high_index=None):
    if not word:
        return False
    elif low_index == high_index or low_index > high_index:
        return True
    elif word[low_index] == word[high_index]:
        return is_palindrome_recursive(word, low_index + 1, high_index - 1)
    else:
        return False
