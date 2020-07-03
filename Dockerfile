FROM node:alpine
WORKDIR /src/app

COPY package.json .
RUN npm install

COPY . .
#first dot- everything in local directory
#second dot - virtual WORKDIR

EXPOSE 3400
CMD ["npm", "start"]

# docker build -t petchicweb .    <= build web image using the docker file in root directory