# set base image (host OS)
FROM node:17 as base

# set working dir to root of the django project
WORKDIR /home/WFRP_FRONT/

# install linux dependencies
# RUN apt-get update && echo 'allo'

# install node dependencies
COPY ./progressive-web-app/package.json .
RUN npm install

# copy the requirements file to the working directory
# copy the project to the working directory
ADD ./progressive-web-app/ .

# removed unused env vars
RUN rm -rf .env.production

# create local prod env vars
RUN echo "NEXT_PUBLIC_API_URL='http://localhost:8000/'" > .env.production
RUN npm run build

# port exposure
EXPOSE 3000
EXPOSE 8000
# command to run on container start when nothing else is run:
CMD npm run dev