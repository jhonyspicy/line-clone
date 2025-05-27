# Use the official Node.js image (latest LTS version)
FROM node:24-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install
RUN apt-get update && apt-get install -y git

# Bundle app source
COPY . .

# Expose port (React default)
EXPOSE 3000

# Start the app (for development)
CMD ["npm", "start"]
