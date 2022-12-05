import { useLocation, Link, NavLink } from 'react-router-dom';
import configuration from '../../config/Configuration';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { iniciarSesion, cerrarSesion } from '../../actions/actions';
import { authType } from '../../ts/types';
import Logout from '../../assets/icons/cerrarsesion.png';
const Sidebar = () => {
	const { logo, menu } = configuration;
	const location = useLocation();
	const dispath = useDispatch();
	useEffect(() => {
		const auth = () => dispath(iniciarSesion());
		auth();
	}, [dispath]);

	const auth = useSelector((state: authType) => state.auth);
	const handleExitSesion = () => {
		const exit = () => dispath(cerrarSesion());
		exit();
	};
	return (
		<div className='sidebar__container'>
			{logo}
			<nav>
				<ul>
					{menu.map((item) => (
						<li key={item.id}>
							<NavLink
								to={item.url}
								className={({ isActive }) =>
									isActive ? 'nav__style active' : 'nav__style'
								}
							>
								{item.name}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
			{location.pathname !== '/login' && !auth.userLogeado ? (
				<div>
					<Link to='/login' className='btn btn__login nav__style'>
						Login
					</Link>
				</div>
			) : (
				<div></div>
			)}
			{auth.userLogeado && (
				<div className='user__container'>
					<div className='btn__container__eliminar'>
						<button
							className='btn__eliminar btn__login'
							onClick={handleExitSesion}
						>
							<p className='auth__user'>{auth.userLogeado}</p>
							<img src={Logout} alt='' width={30} height={30} />
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Sidebar;
