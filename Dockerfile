FROM node:18.16.1-alpine as builder
WORKDIR /app

COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build

FROM nginx:1.25.1-alpine
WORKDIR /app

COPY --from=builder /app/dist ./
COPY nginx.conf /etc/nginx/nginx.conf