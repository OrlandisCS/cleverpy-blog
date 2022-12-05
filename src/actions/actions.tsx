import axios from 'axios';
import { Dispatch } from 'redux';
import { postType } from '../ts/types';
import {
	OBTENER_POSTS,
	OBTENER_POSTS_EXITO,
	OBTENER_POSTS_ERROR,
	ELIMINAR_POST,
	INICIAR_SESION,
	CERRAR_SESION,
} from '../types';

export function obtenerPost() {
	return async (dispatch: Dispatch) => {
		dispatch(descargarPost());
		try {
			const { data } = await axios.get(
				`${process.env.REACT_APP_URL}/posts`
			);
			dispatch(descargaExitosa(data));
		} catch (error) {
			console.log(error);
			dispatch(errorDescarga());
		}
	};
}

const descargarPost = () => ({
	type: OBTENER_POSTS,
	payload: true,
});
const descargaExitosa = (posts: postType) => ({
	type: OBTENER_POSTS_EXITO,
	payload: posts,
});
const errorDescarga = () => ({
	type: OBTENER_POSTS_ERROR,
	payload: true,
});
export function eliminarPost(id: number) {
	return async (dispatch: Dispatch) => {
		dispatch(obtenerPostEliminar(id));
	};
}
const obtenerPostEliminar = (id: number) => ({
	type: ELIMINAR_POST,
	payload: id,
});

export function iniciarSesion(usuario: string) {
	return async (dispatch: Dispatch) => {
		dispatch(iniciarSesionAction(usuario));
	};
}

const iniciarSesionAction = (usuario: string) => ({
	type: INICIAR_SESION,
	payload: usuario,
});

export function cerrarSesion() {
	return async (dispatch: Dispatch) => {
		dispatch(cerrarSesionAction());
	};
}

const cerrarSesionAction = () => ({
	type: CERRAR_SESION,
	payload: true,
});
