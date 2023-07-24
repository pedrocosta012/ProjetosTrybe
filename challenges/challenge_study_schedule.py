def study_schedule(permanence_period: list[list[int]], target_time: int):
    total_people = 0

    if not isinstance(target_time, int) or not (
        valid_input_list(permanence_period)
    ):
        return None

    for person in permanence_period:
        if person[0] <= target_time and target_time <= person[1]:
            total_people += 1

    return total_people if total_people else None


def valid_input_list(arr: list) -> bool:
    if not isinstance(arr, list):
        return False

    for item in arr:
        if len(item) != 2:
            return False
        elif not isinstance(item[0], int) or not isinstance(item[1], int):
            return False

    return True
