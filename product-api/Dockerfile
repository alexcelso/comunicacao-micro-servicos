FROM gradle:8.7-jdk17
COPY --chown=gradle:gradle . /product-api
WORKDIR /product-api
RUN gradle build -x test --no-daemon
EXPOSE 8081
CMD ["gradle", "bootRun"]
