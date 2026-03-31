#!/bin/bash
set -e

# Required environment variables:
#   REPO_URL      - e.g. https://github.com/owner/repo
#   RUNNER_TOKEN  - registration token from Settings → Actions → Runners → New runner
# Optional:
#   RUNNER_NAME   - defaults to hostname
#   RUNNER_LABELS - comma-separated labels, defaults to "self-hosted,linux,x64"

: "${REPO_URL:?REPO_URL is required}"
: "${RUNNER_TOKEN:?RUNNER_TOKEN is required}"

RUNNER_NAME="${RUNNER_NAME:-$(hostname)}"
RUNNER_LABELS="${RUNNER_LABELS:-self-hosted,linux,x64}"

# Deregister the runner cleanly on container stop
cleanup() {
    echo "Deregistering runner..."
    ./config.sh remove --token "${RUNNER_TOKEN}" || true
}
trap cleanup EXIT INT TERM

# Configure the runner (only if not already configured)
if [ ! -f ".runner" ]; then
    ./config.sh \
        --unattended \
        --url "${REPO_URL}" \
        --token "${RUNNER_TOKEN}" \
        --name "${RUNNER_NAME}" \
        --labels "${RUNNER_LABELS}" \
        --no-default-labels \
        --replace
fi

exec ./run.sh
