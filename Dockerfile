# set base image (host OS)
FROM node:17 as base

# set working dir to root of the django project
WORKDIR /home/WFRP_FRONT/

# install linux dependencies
# RUN apt-get update && echo 'allo'

# install node dependencies
COPY ./package.json .
# RUN npm install

# copy the requirements file to the working directory
# copy the project to the working directory
ADD ./ .

# removed unused env vars
RUN rm -rf .env.production

# create local prod env vars
RUN npm run build
RUN echo "NEXT_PUBLIC_API_URL=http://localhost:8000/" > .env.production

# port exposure
EXPOSE 3000

# command to run on container start when nothing else is run:
CMD npm run start