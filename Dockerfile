FROM bocks/datasource:0.4.1
COPY app /code/app
CMD node /code/index.js
EXPOSE 80
