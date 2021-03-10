FROM node

WORKDIR /app

# TODO LOOK INTO HAVING THIS AS A MOUNTED VOLUME OR SOMETHING LIKE THAT
COPY ./package.json package.json
COPY ./yarn.lock yarn.lock
RUN yarn install --pure-lockfile

COPY webpack.config.js webpack.config.js
COPY src src
COPY .storybook .storybook

EXPOSE 3001

CMD yarn start