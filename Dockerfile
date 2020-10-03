# syntax=docker/dockerfile:1.0.0-experimental

# STEP 1 Build app with Node

FROM node:erbium-alpine as builder

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json package-lock.json /app/
RUN cd /app && npm set progress=false
RUN npm i

# Copy project files into the docker image
COPY . /app
RUN cd /app && npm run build-prod

# STEP 2 Build NGINX image to serve app
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy our nginx config
COPY config/nginx /etc/nginx/conf.d

## From 'builder' copy app to default nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
