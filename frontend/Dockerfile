FROM node:18
WORKDIR /app
COPY . /app
RUN npm install && npm run build
CMD ["npx", "serve", "-s", "build"]
