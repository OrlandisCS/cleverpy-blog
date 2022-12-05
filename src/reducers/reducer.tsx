import { initialStateType, actionType } from '../ts/types';
import {
	OBTENER_POSTS,
	OBTENER_POSTS_EXITO,
	OBTENER_POSTS_ERROR,
	ELIMINAR_POST,
} from '../types';

const initialState: initialStateType = {
	posts: [],
	error: null,
	loading: false,
	postEliminar: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action: actionType) {
	switch (action.type) {
		case OBTENER_POSTS:
			return {
				...state,
				loading: action.payload,
			};
		case OBTENER_POSTS_ERROR:
			return {
				...state,
				loading: false,
				error: true,
			};
		case OBTENER_POSTS_EXITO:
			return {
				...state,
				loading: false,
				error: null,
				posts: action.payload,
			};
		case ELIMINAR_POST:
			return {
				...state,
				posts: state.posts.filter(
					(post) => Number(post.id) !== action.payload
				),
			};

		default:
			return state;
	}
}
