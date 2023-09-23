FROM node:16-alpine

WORKDIR /app

RUN apk --no-cache add openssh g++ make python3 git

COPY package.json /app/
COPY package-lock.json /app/

RUN npm ci && npm cache clean --force

ADD . /app

RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000

ENTRYPOINT ["node", ".output/server/index.mjs"]
