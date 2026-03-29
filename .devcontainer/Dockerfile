FROM node:lts

# Install additional tools
RUN apt-get update && apt-get install -y \
    git \
    ca-certificates \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install TypeScript globally
RUN npm install -g typescript

# Verify installations
RUN node --version && \
    npm --version && \
    tsc --version

WORKDIR /workspace
