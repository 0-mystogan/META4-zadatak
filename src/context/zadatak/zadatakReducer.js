import { SET_RED, SET_KOLONA } from '../types';

export default (state, action) => {
	switch (action.type) {
		case SET_RED:
			return {
				...state,
				red: action.payload
			};
		case SET_KOLONA:
			return {
				...state,
				kolona: action.payload
			};
		default:
			return state;
	}
};
