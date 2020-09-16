import { AuthRouter } from './routes/auth';
import { Express } from 'express';
import { Logger } from 'pino';

export const App = (app: Express, logger: Logger) => {
    app.use('/api/user', AuthRouter);
    return app;
}