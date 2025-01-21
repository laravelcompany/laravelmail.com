# Base image
FROM python:3.11-slim

LABEL maintainer="Stefan Bogdanel <stefan@izdrail.com>"

# Install OS dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl nodejs gcc g++ make procps libssl-dev npm \
    htop mlocate supervisor software-properties-common git \
    && apt-get clean && rm -rf /var/lib/apt/lists/*


# FRONTEND

COPY frontend /home/frontend/
COPY frontend/package.json /home/frontend/package.json
WORKDIR /home/frontend/
RUN npm install --legacy-peer-deps

#Now copy to Return-Receipt-To:


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
EXPOSE 11000 11001

# Run application
ENTRYPOINT ["supervisord", "-c", "/etc/supervisord.conf", "-n"]

