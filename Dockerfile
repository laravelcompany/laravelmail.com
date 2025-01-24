# Base image
FROM python:3.11-slim

LABEL maintainer="Stefan Bogdanel <stefan@izdrail.com>"

# Install OS dependencies including Apache
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl nodejs gcc g++ make procps libssl-dev npm \
    htop mlocate supervisor software-properties-common git apache2 \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# FRONTEND

# Install NVM and NodeJS
ENV NVM_DIR=/usr/local/nvm
ENV NODE_VERSION=v23.3.0

RUN mkdir -p $NVM_DIR && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
RUN /bin/bash -c "source $NVM_DIR/nvm.sh && nvm install $NODE_VERSION && nvm use --delete-prefix $NODE_VERSION"

ENV NODE_PATH=$NVM_DIR/versions/node/$NODE_VERSION/lib/node_modules
ENV PATH=$NVM_DIR/versions/node/$NODE_VERSION/bin:$PATH

COPY frontend /home/frontend/
COPY frontend/package.json /home/frontend/package.json
WORKDIR /home/frontend/
RUN npm install --force
# Build your Astro site / This needs to be build locally before deploy
RUN npm run build

# Configure Apache to serve static files on port 1100
COPY docker/apache.conf /etc/apache2/sites-available/apache.conf
RUN a2ensite apache && a2dissite 000-default && \
    echo "Listen 1100" >> /etc/apache2/ports.conf && \
    a2enmod rewrite && \
    service apache2 restart

# Upgrade pip and install pipx
RUN pip install --no-cache-dir --upgrade pip \
    && pip install pipx \
    && pip install poetry

# Set up FastAPI app
WORKDIR /home/backend
COPY backend . 

RUN pip install --no-cache-dir --upgrade -r requirements.txt \
    && pip install fastapi-versioning pymupdf4llm python-multipart yake tls_client uvicorn litellm

# Clean up
RUN apt-get autoremove -y \
    && apt-get clean \
    && updatedb

# Copy Supervisor configuration
COPY docker/supervisord.conf /etc/supervisord.conf

# Expose application ports
EXPOSE 1100 1101

# Run application
ENTRYPOINT ["supervisord", "-c", "/etc/supervisord.conf", "-n"]