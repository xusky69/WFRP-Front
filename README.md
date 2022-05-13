# mp3.ai-API

**[THIS PROJECT IS A WORK IN PROGRESS]**

A **REST API** for **transcribing** and **analyzing** mp3 files with **AI**. This project is made using [Django Rest Framework](https://www.django-rest-framework.org/).

### Features:
- Transcripts a given **.mp3** audio file
- Given a set of words, returns a word count
- Given a set of words, returns the timestamps & confidence values for each one
- Uses an advanced AI transformer model ([roBERTa](https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment)) to idenfity Neutral, Positive & Negative sentiment levels in the audio file
- Token authentication
- Results stored in the database
- Create, Read & Delete operations for your results

As an example: given an .mp3 file about [Puppies](https://en.wikipedia.org/wiki/File:Puppy.ogg) and a set of keywords `["puppy", "puppies", "mother"]`, the output of the API is the following:

```
{'creation_date': '2022-05-12T14:21:37.332088-05:00',
 'get_timestamps': True,
 'last_updated': '2022-05-12T14:21:42.291564-05:00',
 'name': 'Puppies',
 'sentiment_negative': 0.031246395781636238,
 'sentiment_neutral': 0.8286275863647461,
 'sentiment_positive': 0.14012598991394043,
 'timestamps': "[{'conf': 1.0, 'end': 8.28, 'start': 7.86, 'word': 'puppy'}, "
               "{'conf': 1.0, 'end': 11.04, 'start': 10.5, 'word': 'puppies'}, "
               "{'conf': 0.674508, 'end': 23.28, 'start': 22.77, 'word': "
               "'puppies'}, {'conf': 1.0, 'end': 26.1, 'start': 25.70725, "
               "'word': 'puppies'}, {'conf': 0.856674, 'end': 28.14, 'start': "
               "27.84, 'word': 'puppy'}, {'conf': 0.430765, 'end': 35.4, "
               "'start': 35.07, 'word': 'puppy'}, {'conf': 1.0, 'end': 52.23, "
               "'start': 51.81, 'word': 'puppies'}, {'conf': 0.856078, 'end': "
               "56.07, 'start': 55.8, 'word': 'mother'}, {'conf': 0.724164, "
               "'end': 57.48, 'start': 57.06, 'word': 'puppies'}]",
 'transcript': 'copy from wikipedia the free online encyclopedia at wikipedia '
               'dot org a puppy is a juvenile dog some puppies can weigh one '
               'to one and a half kilograms or one to three pounds while '
               'larger ones can weigh up to seven to eleven kilograms or '
               'fifteen to twenty three pounds all healthy puppies grow '
               'quickly after birth of puppies coat color may change as the '
               'puppy grows older as is commonly seen and breed such as the '
               'yorkshire terrier he and vernacular english puppy refers '
               'specifically two dogs while pop they often be used for other '
               'animals such as seals giraffes guinea pigs or even rats or '
               'sharks development born after an average of sixty three days '
               'of gestation puppies a burgeoning am the on that has bitten '
               'off and eaten by the mother dog puppies begin to nurse almost '
               'immediately',
 'user': 'testuser',
 'uuid': 'de52aa55-eca2-4a19-b863-38b1ec5783bd',
 'word_freqs': '{"puppy": 3, "puppies": 5, "mother": 1}',
 'words': '["puppy", "puppies", "mother"]'}
 ```

### Known limitations:
- only **.mp3 files are supported**
- Your audio file will be cropped to the first minute

### To be done:
- Support longer audio files
- Support a more sofisticated auth strategy (JWT, iron-session, etc)
- Create dedicated microservices for model inference only
- Move the inference pipeline to the `save` method of the `Recording` model, *in order to keep views thin and models fat*

## Setting up dev environment

1. Clone the repo & cd to `REPO_FOLDER/django_project/`
2. Make sure you have installed a modern python 3 (>3.9) in your current environment
3. Create a `venv` or use virtual environment manager of your preference (conda, pyenv, etc...), then install dependencies. eg:
```
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt
```
4. Create a symlink between `dev_env_vars` and a `.env` file (or just copy `dev_env_vars` and rename it to `.env`):
```
ln dev_env_vars .env
```
5. open `MP3AI/settings.py` and at the bottom of the file make sure that both `ENABLE_SENT` and `ENABLE_VOSK` are set to `False`:
```
# ENABLE HUGGINGFACE ROBERTA SENTIMENT MODEL
ENABLE_SENT = False

# ENABLE VOSK S2T MODEL
ENABLE_VOSK = False
```
**NOTE**: this disables ML models in order to speed up migrations

6. create & run the initial migrations
```
python manage.py makemigrations accounts
python manage.py makemigrations mp3
python manage.py migrate
```
7. open `MP3AI/settings.py` and at the bottom of the file make sure that both `ENABLE_SENT` and `ENABLE_VOSK` are set to `True`:
```
# ENABLE HUGGINGFACE ROBERTA SENTIMENT MODEL
ENABLE_SENT = True

# ENABLE VOSK S2T MODEL
ENABLE_VOSK = True
```
8. run the development server
```
python manage.py runserver
```
The API will be served at `localhost:8000/api/v1/recordings/`


**PLEASE READ**: 
- the first time you spawn the dev server, it will take a long time to boot, as it will be downloading the sentiment transformer model
- subsequent dev server executions will also be longer than the usual, as it will take some time to initialize the sentiment transformer model

## Setting up docker environment
1. cd to the repo root & run
```
docker-compose up --build
```
2. open another terminal and run migrations
```
docker-compose exec django python manage.py makemigrations accounts
docker-compose exec django python manage.py makemigrations mp3
docker-compose exec django python manage.py migrate
```
**NOTE**: migrations will be very slow to execute, due to ML models instanciating each time you run one of the above commands

3. take containers down and up again just to make sure the db initializes properly
```
docker-compose down
docker-compose up
```
The API will be served at `localhost:8000/api/v1/recordings/`

## Testing the API

You will find an example test script at `REPO_ROOT/test_api.py`
```
python test_api.py
```
