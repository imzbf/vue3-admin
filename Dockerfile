FROM node:14
WORKDIR /vue

COPY ./ /vue
RUN npm install && npm run build

FROM nginx
RUN mkdir /vue-docker
COPY --from=0 /vue-docker/dist /vue-docker
COPY nginx.conf /etc/nginx/nginx.conf