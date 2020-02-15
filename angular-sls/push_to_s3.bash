#!/bin/bash

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'


printf "\n${BLUE}Building production files of angular project...${NC}\n\n"
ng build --prod --aot

printf "\n${BLUE}Syncing to AWS S3 bucket...${NC}\n\n"
aws s3 sync dist/angular-sls/ s3://angular-frontend-posts --delete

printf "\n${GREEN}Successfully uploaded to S3.${NC}\n"
