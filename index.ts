import * as pino from 'pino';
import * as express from 'express';

const logger = pino({
    name: 'app-name',
    level: 'debug'
});

logger.info(`start ${process.env.SERVER}`);

const app = express();
app.listen(3000, () => logger.info('ServerUp and running 3'));
