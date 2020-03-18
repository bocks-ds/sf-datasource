FROM eknight/datasource:0.2.1
COPY app /code/app
CMD node /code/index.js
