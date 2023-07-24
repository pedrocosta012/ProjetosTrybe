from ting_file_management.abstract_queue import AbstractQueue


class Queue(AbstractQueue):
    def __init__(self):
        self._data = []

    def __len__(self):
        return len(self._data)

    def enqueue(self, value):
        if value not in self._data:
            self._data.append(value)

    def dequeue(self):
        if self.__len__():
            value = self._data[0]
            self._data.pop(0)
            return value

    def search(self, index):
        if index >= 0 and index < self.__len__():
            return self._data[index]
        else:
            raise IndexError("Índice Inválido ou Inexistente")

    def peek(self):
        return self._data[0]
