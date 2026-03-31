# Same base image GitHub uses for ubuntu-latest (ubuntu-24.04)
# Runner image reference: https://github.com/actions/runner-images
FROM ubuntu:latest

ARG RUNNER_VERSION=2.333.1
ARG DEBIAN_FRONTEND=noninteractive

LABEL org.opencontainers.image.description="Self-hosted GitHub Actions runner (ubuntu-24.04 compatible)"

# ── System dependencies (mirrors GitHub's ubuntu-latest image) ────────────────
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    wget \
    git \
    gnupg \
    lsb-release \
    unzip \
    zip \
    jq \
    build-essential \
    pkg-config \
    libssl-dev \
    libicu-dev \
    liblttng-ust-dev \
    libkrb5-dev \
    zlib1g-dev \
    sudo \
    dumb-init \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# ── Create a non-root runner user ─────────────────────────────────────────────
RUN useradd -m -s /bin/bash runner \
    && echo "runner ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

WORKDIR /home/runner

# ── Download and install the GitHub Actions runner ────────────────────────────
RUN curl -fsSL \
    "https://github.com/actions/runner/releases/download/v${RUNNER_VERSION}/actions-runner-linux-x64-${RUNNER_VERSION}.tar.gz" \
    -o actions-runner.tar.gz \
    && tar xzf actions-runner.tar.gz \
    && rm actions-runner.tar.gz \
    && ./bin/installdependencies.sh \
    && chown -R runner:runner /home/runner

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

USER runner

# dumb-init ensures signals (SIGTERM on docker stop) propagate to the runner
ENTRYPOINT ["/usr/bin/dumb-init", "--", "/entrypoint.sh"]
