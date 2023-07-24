from tech_news.database import find_news


# Requisito 10
def top_5_categories():
    news_list = find_news()
    categorized_news = {}

    for news in news_list:
        if not news["category"] in categorized_news:
            categorized_news[news["category"]] = 1
        else:
            categorized_news[news["category"]] += 1

    keys = list(categorized_news.keys())
    values = list(categorized_news.values())

    merge_lists = []

    for index, key in enumerate(keys):
        merge_lists.append([key, values[index]])

    sorted_result = sorted(merge_lists, key=lambda x: (-x[1], x[0]))[:5]

    return [item[0] for item in sorted_result]
