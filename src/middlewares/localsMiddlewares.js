import routes from "../routes/routes";

export const localsMiddleware = (req, res, next) => {
	res.locals.siteName = "Job Helper";
	res.locals.routes = routes
	next();
} 