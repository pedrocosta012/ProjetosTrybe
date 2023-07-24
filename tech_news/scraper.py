from requests.exceptions import ConnectionError, Timeout
from tech_news.database import create_news
from parsel import Selector
from requests import get
from time import sleep


def extract_full_text_content(element: str):
    main_element = Selector(element)
    result = ''
    for text in main_element.css('::text').extract():
        result += text
    return result.strip()


# Requisito 1
def fetch(url: str):
    try:
        result = get(
            url=url,
            headers={'user-agent': 'Fake user-agent'},
            timeout=3
        )
        if result.status_code != 200:
            return None
        sleep(1)
        return result.text
    except (ConnectionError, Timeout):
        return None


# Requisito 2
def scrape_updates(html_content: str):
    selector = Selector(html_content)
    artigos = selector.css('a.cs-overlay-link')
    links = [
        artigo.css('::attr(href)').get()
        for artigo in artigos
    ]
    return links


# Requisito 3
def scrape_next_page_link(html_content: str):
    return Selector(html_content).css('a.next::attr(href)').get()


# Requisito 4
def scrape_news(html_content: str):
    news_element = Selector(html_content).css('html')
    return {
        "url": news_element.css(
            'div.post-sidebar-inner div::attr(data-share-url)'
        ).get(),
        "title": news_element.css(
            'div.entry-header-inner h1::text'
        ).get().strip(),
        "timestamp": news_element.css('li.meta-date::text').get().strip(),
        "writer": news_element.css('a.url::text').get().strip(),
        "reading_time": int(
            news_element.css('li.meta-reading-time::text').get().split()[0]
        ),
        "summary": extract_full_text_content(
            news_element.css('div.entry-content p').get()
        ),
        "category": news_element.css('span.label::text').get().strip()
    }


# Requisito 5
def get_tech_news(amount: int):
    selected_news_links = []
    url = 'https://blog.betrybe.com/'

    while len(selected_news_links) < amount:
        page = fetch(url)
        selected_news_links.extend(scrape_updates(page))
        url = scrape_next_page_link(page)

    selected_news = [
        scrape_news(fetch(noticia))
        for noticia in selected_news_links[:amount]
    ]

    create_news(selected_news)

    return selected_news
