FROM node:14-alpine

WORKDIR /home/node/app

COPY . .

RUN npm run build-ts

EXPOSE 3000
# A CMD command is used to set a default command that gets executed once you run the Docker Container. 
# In case you provide a command with the Docker run command, the CMD arguments get ignored from the dockerfile. 
# In the case of multiple CMD commands, only the last one gets executed.
CMD [ "npm", "run", "serve" ]