const bodyParser = require("body-parser");
const express = require("express");
const controllers = require("./controller");
const KafkaConfig = require("./kafkaConfig");

const app = express();
const jsonParser = bodyParser.json();

app.post('/api/send', jsonParser, controllers.sendMessageToKafka);

// Consume from topic "test-topic"
KafkaConfig.consume('my-topic', (value) => {
    console.log(value);
});

app.listen(8000, () => {
    console.log("Server Running at 8000");
});
