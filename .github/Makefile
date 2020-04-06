COMMIT	:= $$(git log -1 --pretty=%H)
# COMMITS := $$(git --no-pager log --no-merges --no-color --pretty=%H %s..HEAD ${COMMIT}
# SENTRY  := https://sentry.io/api/hooks/release/builtin
# TARGET 	:= ${SENTRY}/5191093/aac8e18154d195f024639c477b1cfc8aba0cf3cad7b98c1a681c3af4a84fe171/


release:
	python sentry_release.py ${REPO_NAME} ${TOKEN} ${COMMIT}