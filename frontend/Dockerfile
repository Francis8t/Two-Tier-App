# Step 1: Use Node.js for building
FROM node:18 as build
WORKDIR /app
COPY . /app
RUN npm install && npm run build

# Step 2: Use a lightweight server to serve the build
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
#