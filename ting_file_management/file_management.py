import sys


def txt_importer(path_file: str):
    if not path_file.endswith('.txt'):
        sys.stderr.write('Formato inválido')
        return
    try:
        with open(path_file, mode='r', encoding='utf-8', ) as file:
            return [line for line in file.read().split('\n') if line]
    except FileNotFoundError:
        sys.stderr.write(f'Arquivo {path_file} não encontrado\n')
