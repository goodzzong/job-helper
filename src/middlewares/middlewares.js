import multer from 'multer';
import routes from "../routes/routes";

const multerPortfolio = multer({ dest: 'uploads/portfolio/' });

export const localsMiddleware = (req, res, next) => {
	res.locals.siteName = "Job Helper";
	res.locals.routes = routes;
	res.locals.user = {
		isAuthenticated: true,
		id: 1
	}
	next();
}

export const uploadPortfolio = multerPortfolio.single('portfolioImageFile');
