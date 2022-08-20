FROM node

#Copy the current directory code into a corresponding directory
ADD ./* $HOME/Eliza/

#compile and run app
WORKDIR $HOME/Eliza
ENTRYPOINT ["node", "responsive_server.js"]