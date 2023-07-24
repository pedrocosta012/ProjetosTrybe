from ting_file_management.file_management import txt_importer
from ting_file_management.queue import Queue
import sys


def show_file_data(file_path, number_of_lines, list_lines):
    print(
        '{\n'
        f'  \'nome_do_arquivo\': \'{file_path}\'\n'
        f'  \'qtd_linhas\': {number_of_lines}\n'
        f'  \'linhas_do_arquivo\': {list_lines}\n'
        '},'
    )


def process(path_file: str, instance: Queue):
    file_lines = txt_importer(path_file)
    name = path_file
    total_file_lines = len(file_lines)

    new_item = {
        "nome_do_arquivo": name,
        "qtd_linhas": total_file_lines,
        "linhas_do_arquivo": file_lines,
    }

    instance.enqueue(new_item)

    show_file_data(name, total_file_lines, file_lines)


def remove(instance: Queue):
    removed_item = instance.dequeue()
    if removed_item:
        print(
            f'Arquivo {removed_item["nome_do_arquivo"]} '
            'removido com sucesso'
        )
    else:
        print('Não há elementos')


def file_metadata(instance: Queue, position: int):
    try:
        item = instance.search(position)
        show_file_data(
            item["nome_do_arquivo"],
            item["qtd_linhas"],
            item["linhas_do_arquivo"]
        )
    except IndexError:
        sys.stderr.write('Posição inválida')
