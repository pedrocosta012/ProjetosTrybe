number = int | float


def find_duplicate(nums: list[number]) -> number:
    if not isinstance(nums, list) or len(nums) < 2:
        return False
    sorted_nums = sorted(nums)
    for index, num in enumerate(sorted_nums):
        if not isinstance(num, number) or num < 0:
            return False
        if num == sorted_nums[index - 1]:
            return num
    return False
