import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

const app = express();

app.use('/', (req, res) => res.send('Home'));

export default app;