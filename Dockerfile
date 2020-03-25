FROM eknight/datasource:0.2.3
COPY app /code/app
CMD node /code/index.js
