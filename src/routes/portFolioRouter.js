import express from 'express';
import { createPortFolio, detailPortFolio } from '../controllers/portfolioController';
import routes from './routes';

const portFolioRouter = express.Router();

portFolioRouter.get(routes.createPortFolio, createPortFolio);
portFolioRouter.get(routes.detailPortFolio, detailPortFolio);

export default portFolioRouter;