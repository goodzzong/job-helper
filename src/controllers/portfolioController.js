import routes from '../routes/routes';
import { portfolios } from '../../data';

export const home = (req, res) => {

	res.render('home', { pageTitle: 'home', portfolios });
};

export const getCreate = (req, res) => {
	res.render('portfolioCreate', { pageTitle: 'Portfolio create' })
};

export const postCreate = (req, res) => {
	const {
		body: {
			portfolioImageFile,
			title,
			description,
			portfolioUrl
		}
	} = req;

	res.redirect(routes.detailPortFolio(324393));

};

export const detail = (req, res) => {
	res.render('portfolioDetail', { pageTitle: 'Portfolio detail' })
};

