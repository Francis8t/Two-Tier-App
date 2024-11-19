# Stage 1: Build the React app
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the React app
FROM node:18
WORKDIR /app
COPY --from=build /app/build ./build
RUN npm install serve -g  # Install serve globally
EXPOSE 80
CMD ["serve", "-s", "build", "-l", "80"]
