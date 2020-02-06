import React, { useReducer } from 'react';
import ZadatakContext from './zadatakContext';
import ZadatakReducer from './zadatakReducer';
import { SET_RED, SET_KOLONA } from '../types';

const ZadatakState = props => {
	const initialState = {
		red: null,
		kolona: null,
		ukupno: null
	};

	const [state, dispatch] = useReducer(ZadatakReducer, initialState);

	const postaviRed = r => {
		let newR = parseInt(r);
		dispatch({
			type: SET_RED,
			payload: newR
		});
	};

	const postaviKolonu = k => {
		let newK = parseInt(k);
		dispatch({
			type: SET_KOLONA,
			payload: newK
		});
	};

	return (
		<ZadatakContext.Provider
			value={{
				red: state.red,
				kolona: state.kolona,
				ukupno: state.ukupno,
				postaviRed,
				postaviKolonu
			}}
		>
			{props.children}
		</ZadatakContext.Provider>
	);
};

export default ZadatakState;
