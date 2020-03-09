FROM eknight/datasource
COPY app /code/app
CMD node /code/index.js
EXPOSE 80
