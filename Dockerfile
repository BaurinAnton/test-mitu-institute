# Creating a Docker image in development mode

# Installing node js and additional packages
FROM node:14-alpine
RUN apk update && apk add  build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev

# env variables. Initial env value
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Installing the required node packages
WORKDIR /opt/app
COPY ./package.json ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g && yarn install

# Copying project files to the required directory
COPY ./ .

# Build project
RUN yarn build