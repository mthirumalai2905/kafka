import KafkaConfig from "./kafkaConfig";

const sendMessageToKafka = async (req, res) => {
    try {
        const { message } = req.body;
        const kafkaConfig = new KafkaConfig(); // Instantiate KafkaConfig properly
        const messages = [
            { key: 'key1', value: message }
        ];
        kafkaConfig.produce("my-topic", messages); // Use the instance to call produce()

        res.status(200).json({
            status: "ok",
            message: "Message successfully sent!" // Corrected the typo
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: "error",
            message: "An error occurred while sending the message"
        });
    }
};

const controllers = { sendMessageToKafka };

export default controllers;
