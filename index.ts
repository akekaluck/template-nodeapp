import * as pino from 'pino';
import * as express from 'express';
import { App } from './src/app';

const logger = pino({
    name: 'app-name',
    level: 'debug'
});

logger.info(`start ${process.env.SERVER}`);
        
const app = App(express(), logger);
app.listen(3000, () => logger.info('ServerUp and running'));
