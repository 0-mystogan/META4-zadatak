import React, { useContext, useState } from 'react';
import ZadatakContext from '../context/zadatak/zadatakContext';
import AlertContext from '../context/alert/alertContext';

const Input = props => {
	const zadatakContext = useContext(ZadatakContext);
	const alertContext = useContext(AlertContext);

	const [red, setRed] = useState('');
	const [kolona, setKolona] = useState('');

	const onSubmit = e => {
		e.preventDefault();
		if (red === '' || kolona === '') {
			alertContext.setAlert('Sva polja moraju biti popunjena!', 'primary');
		} else if (
			isNaN(red) ||
			red < 1 ||
			red > 10 ||
			isNaN(kolona) ||
			kolona < 1 ||
			kolona > 10
		) {
			alertContext.setAlert('Samo brojevi su dozvoljeni!', 'primary');
		} else if (red > 5 || kolona > 5) {
			alertContext.setAlert('Red i kolona ne smiju biti veći od 5!', 'primary');
		} else {
			zadatakContext.postaviRed(red);
			zadatakContext.postaviKolonu(kolona);
			setRed('');
			setKolona('');
		}
		console.log(inputRed.current.value);
	};

	const onChangeRed = e => setRed(e.target.value);
	const onChangeKolona = e => setKolona(e.target.value);

	const onKeyUp = (e, target) => {
		if (e.keyCode === 13) {
			inputKolona.current.focus();
		}
	};

	var inputRed = React.createRef();
	var inputKolona = React.createRef();
	return (
		<div>
			<div className="naslov">INPUT</div>
			<div className="label">Broj redaka</div>
			<form onSubmit={onSubmit}>
				<input
					ref={inputRed}
					className="inputBroj"
					type="text"
					value={red}
					onKeyUp={onKeyUp}
					onChange={onChangeRed}
				/>
				<div className="label">Broj stupaca</div>
				<input
					ref={inputKolona}
					className="inputBroj"
					type="text"
					value={kolona}
					onChange={onChangeKolona}
				/>
				<input type="submit" value="KREIRAJ TABLICU" className="dugme" />
			</form>
		</div>
	);
};

export default Input;
