import * as mqtt from 'mqtt';
import { MqttClient } from 'mqtt';
import * as pino from 'pino';


const logger = pino({
    name: 'app-name',
    level: 'debug'
});

logger.info(`start ${process.env.SERVER}`);

const mqttClient: MqttClient = mqtt.connect({
    brokerUrl: ''
})

mqttClient.on('connect', () => {
    logger.info(`test logger`)
})