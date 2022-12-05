import React from 'react';
import Sidebar from '../ui/sidebar';
type Props = {
	children: JSX.Element;
};
const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Sidebar />
			<main>{children}</main>
		</>
	);
};

export default Layout;
