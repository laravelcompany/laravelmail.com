#!/bin/bash

# Get the current week number
current_week=$(date +%V)

# Create the version string
version="0.1.$current_week"

echo "Creating and pushing tag: $version"

git tag -a $version -m "Release $version"

git push origin $version