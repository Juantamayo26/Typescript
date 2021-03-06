import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes/routes';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(morgan("dev"));
app.use(cors())

app.use(routes);

export default app;
