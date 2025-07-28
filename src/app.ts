import express from 'express';
import routes from './routes';
import { setupSwagger } from './config/swagger';

const app = express();
app.use(express.json());
app.use('/api', routes);
setupSwagger(app);

export default app;