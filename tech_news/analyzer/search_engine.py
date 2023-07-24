from tech_news.database import find_news
import datetime
import re


# Requisito 7
def search_by_title(title):
    news_list = find_news()
    return [
        (news["title"], news["url"])
        for news in news_list
        if title.lower() in news["title"].lower()
    ]


# Requisito 8
def search_by_date(date):
    if not isinstance(date, str) or not re.fullmatch(
        r'\d{4}-\d{2}-\d{2}', date
    ):
        raise ValueError('Data inválida')

    news_list = find_news()

    date_to_arr = date.split('-')

    try:
        datetime.date(
            int(date_to_arr[0]),
            int(date_to_arr[1]),
            int(date_to_arr[2])
        )
    except ValueError:
        raise ValueError('Data inválida')

    formatted_date = f'{date_to_arr[2]}/{date_to_arr[1]}/{date_to_arr[0]}'

    return [
        (news["title"], news["url"])
        for news in news_list
        if formatted_date in news["timestamp"]
    ]


# Requisito 9
def search_by_category(category):
    news_list = find_news()
    return [
        (news["title"], news["url"])
        for news in news_list
        if category.lower() in news["category"].lower()
    ]
