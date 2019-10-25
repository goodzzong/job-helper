import express from 'express';
import { getCreate, postCreate, detail } from '../controllers/portfolioController';
import routes from './routes';

const portFolioRouter = express.Router();

portFolioRouter.get(routes.createPortFolio, getCreate);
portFolioRouter.post(routes.createPortFolio, postCreate);

portFolioRouter.get(routes.detailPortFolio(), detail);

export default portFolioRouter;