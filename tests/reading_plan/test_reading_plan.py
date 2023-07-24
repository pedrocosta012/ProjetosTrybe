from tech_news.analyzer.reading_plan import ReadingPlanService  # noqa: F401, E261, E501
from pytest import raises
import unittest


def test_reading_plan_group_news():
    # Arrange

    mock_return = [
        {
            'category': 'Desenvolvimento Web',
            'reading_time': 6,
            'summary': (
                'Criar um projeto web com todas as estruturas de pastas, '
                'arquivos e até mesmo os conteúdos dentro do arquivo pode '
                'ser assustador, ainda mais quando você está em um de seus '
                'primeiros projetos.'
            ),
            'timestamp': '08/03/2023',
            'title': (
                'Angular CLI: como usar essa interface de linha de comando?'
            ),
            'url': 'https://blog.betrybe.com/desenvolvimento-web/angular-cli/',
            'writer': 'Cairo Noleto'
        },
        {
            'category': 'Linguagem de Programação',
            'reading_time': 5,
            'summary': (
                'Array é uma estrutura que comporta uma coleção de dados do '
                'mesmo tipo. Se você quer saber o que é array, precisa saber '
                'que eles são muito importantes na programação.'
            ),
            'timestamp': '06/03/2023',
            'title': 'O que é array, para que serve e como fazer?',
            'url': (
                'https://blog.betrybe.com/linguagem-de-programacao/'
                'o-que-e-array/'
            ),
            'writer': 'Gleiciane Kelly'
        },
        {
            'category': 'Tecnologia',
            'reading_time': 11,
            'summary': (
                'Você já passou pela frustração de tentar usar um aplicativo '
                'ou sistema e ele não corresponder às suas ações? Isso pode '
                'ocorrer com frequência quando não utilizamos os conceitos de '
                'usabilidade durante o desenvolvimento de um software, produto'
                ' ou serviço.'
            ),
            'timestamp': '01/03/2023',
            'title': (
                'Usabilidade no Desenvolvimento de software e UX: '
                'como funciona?'
            ),
            'url': (
                'https://blog.betrybe.com/tecnologia/'
                'usabilidade-no-desenvolvimento-de-software/'
            ),
            'writer': 'Cairo Noleto'
        },
        {
            'category': 'Tecnologia',
            'reading_time': 10,
            'summary': (
                'Com o grande crescimento da tecnologia e das tecnologias '
                'móveis, como os dispositivos Android, as pessoas dependem '
                'cada vez mais desses dispositivos que são verdadeiros '
                'facilitadores em nossa rotina diária.\xa0Realizar compras '
                'tpela internet ou até mesmo ransferências através aplicativo '
                'de banco sem ter que sair do conforto de sua casa é a melhor '
                'coisa, não é mesmo?'
            ),
            'timestamp': '27/02/2023',
            'title': (
                'Antivírus Android: conheça os 10 melhores e '
                'saiba por que usar!'
            ),
            'url': 'https://blog.betrybe.com/tecnologia/antivirus-android/',
            'writer': 'Cairo Noleto'
        },
        {
            'category': 'Tecnologia',
            'reading_time': 9,
            'summary': (
                'O surgimento dos tipos de firewall foi um avançado '
                'excepcional na tecnologia, já que firewall é o sistema de '
                'segurança capaz de realizar análises em sites e proteger as '
                'pessoas usuárias de ataques e páginas maliciosas.'
            ),
            'timestamp': '22/02/2023',
            'title': (
                'Conheça os 11 tipos de firewall, saiba como funcionam '
                'e qual usar'
            ),
            'url': 'https://blog.betrybe.com/tecnologia/tipos-de-firewall/',
            'writer': 'Cairo Noleto'
        },
        {
            'category': 'Tecnologia',
            'reading_time': 9,
            'summary': (
                  'A todo o instante diversos dados trafegam pela rede: '
                  'seja o envio de um e-mail, uma mensagem, foto, '
                  'arquivo, esses dados partem de um ponto A para um '
                  'ponto B. Mas como essa comunicação é feita? Para '
                  'respondermos a essa pergunta, vamos aprender sobre o '
                  'protocolo TCP/IP.'
                    ),
            'timestamp': '17/02/2023',
            'title': 'Protocolo TCP/IP: o que é e exemplos de como funciona',
            'url': 'https://blog.betrybe.com/tecnologia/protocolo-tcp-ip/',
            'writer': 'Cairo Noleto'
        },
        {
            'category': 'Tecnologia',
            'reading_time': 14,
            'summary': (
                'Você sabia que com a utilização de um arduino é possível '
                'fazer sensores de led ou até mesmo aqueles carrinhos '
                'autônomos bastante parecidos com um robô? Pois bem, com um '
                'arduino em mãos é possível desenvolver diversas coisas que '
                'podem trazer algumas facilidades em seu cotidiano.'
            ),
            'timestamp': '14/02/2023',
            'title': 'Programação em Arduino para iniciantes em 11 passos!',
            'url': (
                'https://blog.betrybe.com/tecnologia/programacao-em-arduino/'
            ),
            'writer': 'Cairo Noleto'
        },
        {
            'category': 'Tecnologia',
            'reading_time': 18,
            'summary': (
                'É fato que todo computador necessita de um sistema '
                'operacional para funcionar. Entretanto, diversas opções '
                'estão disponíveis no mercado, como o Windows, o Mac OS, o '
                'Linux e suas variações.'
            ),
            'timestamp': '06/02/2023',
            'title': (
                'Sistema Operacional Windows: versões, dicas e como instalar?'
            ),
            'url': (
                'https://blog.betrybe.com/tecnologia/'
                'sistema-operacional-windows/'
            ),
            'writer': 'Cairo Noleto'
        },
        {
            'category': 'Tecnologia',
            'reading_time': 5,
            'summary': (
                'Quando falamos de algoritmos, pensamos em matemática e '
                'programação. Porém, temos exemplos de algoritmos que estão '
                'muito presentes nas nossas atividades cotidianas.'
            ),
            'timestamp': '03/02/2023',
            'title': '5 exemplos de algoritmos na vida real e na computação',
            'url': (
                'https://blog.betrybe.com/tecnologia/exemplos-de-algoritmos/'
            ),
            'writer': 'Lucas Custódio'
        },
        {
            'category': 'Carreira',
            'reading_time': 9,
            'summary': (
                'Gaules, uma das maiores personalidades do mundo de esports '
                'brasileiro, divide um pouco de sua experiência de vida e '
                'carreira em um webinar com estudantes e ex-estudantes da '
                'Escola de Programação Trybe.'
            ),
            'timestamp': '30/01/2023',
            'title': (
                'TrybeTalks — Gaules: os ensinamentos de um dos maiores '
                'streamers do Brasil'
            ),
            'url': 'https://blog.betrybe.com/carreira/trybetalks-gaules/',
            'writer': 'Lucas Custódio'
        },
        {
            'category': 'Tecnologia',
            'reading_time': 13,
            'summary': (
                'Conhecer as principais tecnologias do mercado, bibliotecas '
                'ou frameworks, sejam elas Angular, React ou Vue é essencial. '
                'Dentro deles, há mais possibilidades que podemos utilizar em '
                'nossos projetos, tais como o Next JS, presente no ecossistema'
                ' do React.js.'
            ),
            'timestamp': '27/01/2023',
            'title': 'Next JS: o que é, para que serve e por que usar?',
            'url': 'https://blog.betrybe.com/tecnologia/next-js/',
            'writer': 'Lucas Marchiori'
        },
        {
            'category': 'Tecnologia',
            'reading_time': 8,
            'summary': (
                'Hardware e software são conceitos muito valiosos para pessoas'
                ' da tecnologia da informação e saber a diferença entre esses '
                'dois termos é essencial para engrenar na carreira.'
            ),
            'timestamp': '26/01/2023',
            'title': 'Hardware e software: o que são e quais as diferenças?',
            'url': (
                'https://blog.betrybe.com/tecnologia/'
                'hardware-software-diferencas/'
            ),
            'writer': 'Lucas Marchiori'
        },
        {
            'category': 'Tecnologia',
            'reading_time': 10,
            'summary': (
                'Se você utiliza Windows já deve ter se deparado com uma '
                'mensagem contendo um relatório das ameaças que o sistema '
                'bloqueou recentemente. Entretanto, você sabe o que está por '
                'trás dessas análises? Trata-se do firewall, um sistema de '
                'segurança utilizado para verificar o tráfego da rede e '
                'identificar potenciais ameaças.'
            ),
            'timestamp': '23/01/2023',
            'title': (
                'Firewall: o que é, como funciona, 11 tipos e como configurar'
            ),
            'url': 'https://blog.betrybe.com/tecnologia/firewall-tudo-sobre/',
            'writer': 'Cairo Noleto'
        },
        {
            'category': 'Tecnologia',
            'reading_time': 4,
            'summary': (
                'Os operadores booleanos permitem buscas com resultados '
                'eficientes dos dados pesquisados, das mais simples às mais '
                'avançadas.'
            ),
            'timestamp': '18/01/2023',
            'title': 'Operadores booleanos: 3 exemplos para usar em pesquisas',
            'url': 'https://blog.betrybe.com/tecnologia/operadores-boleanos/',
            'writer': 'Gleiciane Kelly'
        },
        {
            'category': 'Tecnologia',
            'reading_time': 9,
            'summary': (
                'Mark Zuckerberg revolucionou a forma como nos relacionamos '
                'pela internet com a criação do Facebook em 2004. Agora, ele '
                'quer ir mais além: sua ideia é construir o metaverso.'
            ),
            'timestamp': '16/01/2023',
            'title': 'Mark Zuckerberg é o criador do Metaverso?',
            'url': (
                'https://blog.betrybe.com/tecnologia/'
                'mark-zuckerberg-metaverso/'
            ),
            'writer': 'Lucas Custódio'
        }
    ]

    mock_output = {
        'readable': [
            {
                'chosen_news': [
                    (
                        'Angular CLI: como usar essa interface de '
                        'linha de comando?',
                        6
                    )
                ],
                'unfilled_time': 4
            },
            {
                'chosen_news': [
                    (
                        'O que é array, para que serve e como fazer?',
                        5
                    ),
                    (
                        'Operadores booleanos: 3 exemplos para usar em '
                        'pesquisas',
                        4
                    )
                ],
                'unfilled_time': 1
            },
            {
                'chosen_news': [
                    (
                        'Antivírus Android: conheça os 10 melhores e '
                        'saiba por que usar!',
                        10
                    )
                ],
                'unfilled_time': 0
            },
            {
                'chosen_news': [
                    (
                        'Conheça os 11 tipos de firewall, saiba como '
                        'funcionam e qual usar',
                        9
                    )
                ],
                'unfilled_time': 1
            },
            {
                'chosen_news': [
                    (
                        'Protocolo TCP/IP: o que é e exemplos de como '
                        'funciona',
                        9
                    )
                ],
                'unfilled_time': 1
            },
            {
                'chosen_news': [
                    (
                        '5 exemplos de algoritmos na vida real e na '
                        'computação',
                        5
                    )
                ],
                'unfilled_time': 5
            },
            {
                'chosen_news': [
                    (
                        'TrybeTalks — Gaules: os ensinamentos de um '
                        'dos maiores streamers do Brasil',
                        9
                    )
                ],
                'unfilled_time': 1
            },
            {
                'chosen_news': [
                    (
                        'Hardware e software: o que são e quais as '
                        'diferenças?',
                        8
                    )
                ],
                'unfilled_time': 2
            },
            {
                'chosen_news': [
                    (
                        'Firewall: o que é, como funciona, 11 tipos e '
                        'como configurar',
                        10
                    )
                ],
                'unfilled_time': 0
            },
            {
                'chosen_news': [
                    (
                        'Mark Zuckerberg é o criador do Metaverso?',
                        9
                    )
                ],
                'unfilled_time': 1
            }
        ],
        'unreadable': [
            (
                'Usabilidade no Desenvolvimento de software e UX: como '
                'funciona?',
                11
            ),
            (
                'Programação em Arduino para iniciantes em 11 passos!',
                14
            ),
            (
                'Sistema Operacional Windows: versões, dicas e como instalar?',
                18
            ),
            (
                'Next JS: o que é, para que serve e por que usar?',
                13
            )
        ],
    }

    classe = ReadingPlanService

    with raises(TypeError):
        classe.group_news_for_available_time('xablau')

    with unittest.mock.patch.object(
        ReadingPlanService,
        '_db_news_proxy',
        return_value=mock_return
    ):

        # Act
        act_result = classe.group_news_for_available_time(10)

        # Assignment
        assert act_result == mock_output
