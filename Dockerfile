FROM eknight/datasource:0.2.2
COPY app /code/app
CMD node /code/index.js
