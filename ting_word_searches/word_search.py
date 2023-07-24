from ting_file_management.queue import Queue


def exists_word(word: str, instance: Queue):
    partial_result = []

    for i in range(len(instance)):
        file = instance.search(i)
        obj = {
            'palavra': word,
            'arquivo': file['nome_do_arquivo'],
            'ocorrencias': []
        }

        for j, line in enumerate(file['linhas_do_arquivo']):
            if word.lower() in line.lower():
                obj['ocorrencias'].append({'linha': j + 1})

        partial_result.append(obj)

    return [found for found in partial_result if len(found['ocorrencias'])]


def search_by_word(word: str, instance: Queue):
    if len(instance):
        find_words = exists_word(word, instance)

        for i, obj in enumerate(find_words):
            mod_ocorrencias = []
            for conteudo in obj["ocorrencias"]:
                conteudo["conteudo"] = instance.search(
                    i)["linhas_do_arquivo"][conteudo["linha"] - 1]
                mod_ocorrencias.append(conteudo)
            obj["ocorrencias"] = mod_ocorrencias

        print(find_words)
        return find_words
