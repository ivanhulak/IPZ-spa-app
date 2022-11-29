# Only dockerise react app
# FROM node:13.12.0-alpine
# WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install --silent
# RUN npm install react-scripts@5.0.1 -g --silent
# COPY . ./
# CMD ["npm", "start"]

# Help for me not to forgot commands
# 
# docker build -t react-docker-image:dev . - create image
# docker run -it -p 3000:3000 react-docker-image:dev - run container


# dockerise react app + NGINX

# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM tiangolo/node-frontend:10 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm install react-scripts@5.0.1 -g --silent

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /app/build/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf

# Help for me not to forgot commands
# 
# docker build -t my-react-app .
# docker run -p 80:80 my-react-app