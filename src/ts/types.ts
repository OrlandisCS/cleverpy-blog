export type postType = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export type initialStateType = {
	posts: postType[];
	error: boolean | null;
	loading: boolean;
	postEliminar: number | null;
};

export type actionType = {
	type: string;
	payload: boolean | postType | string | number | (() => void);
};

export interface Geo {
	lat: string;
	lng: string;
}

export interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
}

export interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}

export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}
export type PaginationType = {
	postsPorPagina: number;
	postsTotales: number;
	paginar: (numero: number) => void;
};

export type authType = {
	auth: {
		userLogeado: string | null;
	};
};
