// main
const HOME = '/';

// portfolio
const PORTFOLIO = '/portfolios';
const CREATE_PORTFOLIO = '/create';
const DETAIL_PORTFOLIO = '/:id';


const routes = {
	home: HOME,
	portfolio: PORTFOLIO,
	createPortFolio: CREATE_PORTFOLIO,
	detailPortFolio: (id) => {
		if (id) {
			return `/portfolios/${id}`;
		} else {
			return DETAIL_PORTFOLIO;
		}
	},
}

export default routes;