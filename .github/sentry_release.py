import subprocess
import requests
import sys

REPO_NAME = sys.argv[0]
SENTRY_API_TOKEN = sys.argv[1]
ORG = sys.argv[2]

log = subprocess.check_output([
    'git',
    '--no-pager',
    'log',
    '--no-merges',
    '--no-color',
    '--pretty=%H',
], universal_newlines=True)

commits = log.strip().split('\n')

data = {
    'commits': [{'id': c, 'repository': REPO_NAME} for c in commits],
    'version': commits[0],
    'projects': ['my-project', 'my-other-project'],
}

res = requests.post(
    f'https://sentry.io/api/0/organizations/{ORG}/releases/',
    json=data,
    headers={f'Authorization': 'Bearer {SENTRY_API_TOKEN}'},
)
raise ValueError(res.text)