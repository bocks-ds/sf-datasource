FROM bocks/datasource:0.2.4
COPY app /code/app
CMD node /code/index.js
EXPOSE 80