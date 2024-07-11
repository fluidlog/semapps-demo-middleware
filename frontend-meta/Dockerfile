FROM node:18-alpine

# Default arguments
ARG SELECTED_BRANCH=master

WORKDIR /archipelago

RUN node -v
RUN npm -v

RUN apk add --update --no-cache git bash yarn nano

RUN yarn global add serve

# Force cache invalidation if the master branch changed since last build
# If we don't do that, Docker may skip the git clone command
ADD https://api.github.com/repos/assemblee-virtuelle/archipelago/git/refs/heads/$SELECTED_BRANCH ../git-version.json

RUN git clone https://github.com/assemblee-virtuelle/archipelago.git /archipelago

RUN git checkout $SELECTED_BRANCH

ADD app /archipelago/frontend
WORKDIR /archipelago/frontend

RUN yarn install
RUN yarn build

EXPOSE 5000

CMD serve -s build -l 5000
