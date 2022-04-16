FROM node:14-alpine

RUN mkdir -p /home/node/app/node_modules \
 && mkdir /home/node/app/uploads 
#  && chown -R node:node /home/node/app

WORKDIR /home/node/app

# why use USER COMMAND: http://redhatgov.io/workshops/security_containers/exercise1.2/
# USER node
# non root mode see: https://stackoverflow.com/questions/44766665/how-do-i-docker-copy-as-non-root
COPY . .

# When you use a RUN command in your dockerfile, it always creates a new intermediate image layer on top of the previous ones. 
RUN npm config set registry http://registry.npm.taobao.org/ \
&& npm install \
&& npm run build-ts

EXPOSE 3000
# A CMD command is used to set a default command that gets executed once you run the Docker Container. 
# In case you provide a command with the Docker run command, the CMD arguments get ignored from the dockerfile. 
# In the case of multiple CMD commands, only the last one gets executed.
CMD [ "npm", "run", "serve" ]