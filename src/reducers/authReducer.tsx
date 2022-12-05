import { actionType } from '../ts/types';
import { INICIAR_SESION, CERRAR_SESION } from '../types';

const initialState = {
	userLogeado: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action: actionType) {
	switch (action.type) {
		case INICIAR_SESION:
			return {
				...state,
				userLogeado: action.payload,
			};
		case CERRAR_SESION:
			return {
				...state,
				userLogeado: null,
			};
		default:
			return state;
	}
}
