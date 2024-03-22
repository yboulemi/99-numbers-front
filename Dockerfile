# Use a base image with Node.js pre-installed
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install project dependencies using yarn
RUN yarn install

# Copy the rest of the project files to the working directory
COPY . .

# Build the frontend application
RUN yarn build

# Expose the port on which the application will run
EXPOSE 3000

# Define the command to start the application
CMD [ "yarn", "start" ]