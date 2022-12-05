import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { postType, User } from '../ts/types';
import Trash from '../assets/icons/eliminar.png';
import { eliminarPost } from '../actions/actions';
import Swal from 'sweetalert2';
const Card = ({ userId, title, body, id }: postType) => {
	const [user, setUser] = useState<User | null>(null);
	const dispatch = useDispatch();

	const eliminarPostById = (id: number) => {
		Swal.fire({
			title: 'Eliminar Post?',
			text: 'Este post solo se eliminará en memoria, por lo tanto si recarga estará disponible nuevamente',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, Eliminar!',
			cancelButtonText: 'Cancelar',
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(eliminarPost(id));
				Swal.fire(
					'Eliminado!',
					'Post Eliminado correctamente.',
					'success'
				);
			}
		});
	};

	useEffect(() => {
		const getUser = async () => {
			const { data } = await axios.get(
				`${process.env.REACT_APP_URL}/users/${userId}`
			);
			setUser(data);
		};
		getUser();
	}, [userId]);

	return (
		<div className='card'>
			<div className='top__title'>
				<p>
					Username: <span>{user?.username}</span>
				</p>
			</div>
			<div className='top__subtitle'>
				<p>{title}</p>
			</div>
			<div className='card__body'>
				<p>{body}</p>
			</div>
			<div className='user__name'>
				<p>
					Escrito por: <span>{user?.name}</span>
				</p>
			</div>
			<br />
			<div className='btn__container__eliminar'>
				<button
					className='btn__eliminar'
					onClick={() => eliminarPostById(id)}
				>
					<img src={Trash} alt='' width={30} height={30} />
				</button>
			</div>
		</div>
	);
};

export default Card;
