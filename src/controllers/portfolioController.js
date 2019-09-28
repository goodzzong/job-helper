export const home = (req, res) => {
	res.render('home', { pageTitle: 'home' });
};

export const createPortFolio = (req, res) => {
	res.render('portfolioCreate', { pageTitle: 'Portfolio create' })
};

export const detailPortFolio = (req, res) => {
	res.render('portfolioDetail', { pageTitle: 'Portfolio detail' })
};

