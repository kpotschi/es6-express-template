export const indexController = (req, res, next) => {
	res.render('index', { title: 'Test Express' });
};
