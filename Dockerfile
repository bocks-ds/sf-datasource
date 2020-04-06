FROM bocks/datasource:0.3.0
COPY app /code/app
CMD node /code/index.js
EXPOSE 80
