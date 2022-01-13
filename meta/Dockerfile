FROM node:12.16-alpine

# Get argument from docker-compose-prod.yaml
# ARG SELECTED_BRANCH=main

RUN node -v
RUN npm -v

RUN apk add --update --no-cache autoconf bash libtool automake python alpine-sdk openssh-keygen yarn nano

RUN yarn global add pm2

# Force cache invalidation if the master branch changed since last build
# If we don't do that, Docker may skip the git clone command
ADD https://api.github.com/repos/assemblee-virtuelle/archipelago/git/refs/heads/$SELECTED_BRANCH ../git-version.json

RUN git clone https://github.com/assemblee-virtuelle/archipelago /semapps_clone

WORKDIR /semapps_clone
RUN git checkout $SELECTED_BRANCH

# Move selected dir to root /app directory
RUN mv ./middleware /app

# We can now remove the clone
WORKDIR /app

ADD ./ecosystem.config.js /app
ADD ./app /app

RUN yarn install

EXPOSE 3000

CMD [ "pm2-runtime", "ecosystem.config.js" ]
