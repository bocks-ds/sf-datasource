import subprocess
import requests
import sys

REPO_NAME = sys.argv[0]
SENTRY_API_TOKEN = sys.argv[1]
PREVIOUS_COMMIT = sys.argv[2]

log = subprocess.check_output([
    'git',
    '--no-pager',
    'log',
    '--no-merges',
    '--no-color',
    '--pretty=%H',
    '%s..HEAD' % (PREVIOUS_COMMIT,),
])

commits = log.strip().split('\n')

data = {
    'commits': [{'id': c, 'repository': 'my-repo-name'} for c in commits],
    'version': commits[0],
    'projects': ['my-project', 'my-other-project'],
}

res = requests.post(
    'https://sentry.io/api/0/organizations/my-org/releases/',
    json=data,
    headers={'Authorization': 'Bearer {}'.format(SENTRY_API_TOKEN)},
)
