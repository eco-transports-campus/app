export const styles = theme => ({
	drawerHeader: theme.mixins.toolbar,
	drawerPaper: {
		width: 250,
		[theme.breakpoints.up('md')]: {
			width: 240,
			position: 'fixed',
			height: '100vh',
		},
	},
	menuItems: {
		textDecoration: 'none',
	}
});