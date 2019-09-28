import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import path from 'path';
import { localsMiddleware } from './src/middlewares/localsMiddlewares';
import routes from './src/routes/routes';
import globalRouter from './src/routes/globalRouter';
import portFolioRouter from './src/routes/portFolioRouter';

const app = express();

app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'pug');

app.use(helmet());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.portfolio, portFolioRouter);

export default app;