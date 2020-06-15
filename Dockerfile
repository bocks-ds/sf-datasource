FROM bocks/datasource:0.4.2
COPY app /code/app
CMD node /code/index.js
EXPOSE 80
