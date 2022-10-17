FROM node:16.17.1-alpine as install
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# 构建项目
FROM node:16.17.1-alpine as builder
WORKDIR /app
COPY . .
COPY --from=install /app/node_modules ./node_modules
RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

FROM nginx:1.23.1-alpine
WORKDIR /app

COPY --from=builder /app/dist ./
COPY nginx.conf /etc/nginx/nginx.conf