# Use the official Node.js 14 base image
FROM node:14-alpine


# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the frontend app (replace 'build' with your actual build command)
RUN npm run build

# Expose the desired port (replace '3000' with your app's port)
EXPOSE 80

# Define the command to run the app
CMD [ "npm", "start" ]
