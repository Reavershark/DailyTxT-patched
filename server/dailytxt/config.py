import os


class BaseConfig(object):
    DEBUG = False

    DATA_PATH = 'data/'
    USERS_FILE = 'users.json'

    # used for encryption and session management
    SECRET_KEY = os.urandom(24)
    if 'SECRET_KEY' in os.environ:
        SECRET_KEY = os.environ.get('SECRET_KEY')

    DATA_INDENT = None
    if 'DATA_INDENT' in os.environ:
        DATA_INDENT = int(os.environ.get('DATA_INDENT', '0'), 10)

