FROM python:3.11.1

WORKDIR /app
COPY . /app

RUN python3 -m pip install --upgrade pip
RUN pip install -r dev-requirements.txt

