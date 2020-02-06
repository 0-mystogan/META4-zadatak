import React, { useContext, Fragment } from 'react';
import ZadatakContext from '../context/zadatak/zadatakContext';

const Tabela = () => {
	const zadatakContext = useContext(ZadatakContext);
	const { red, kolona } = zadatakContext;

	var inputRef = new Array(red);
	for (let i = 0; i < inputRef.length; i++) {
		inputRef[i] = new Array(kolona);
	}

	const dodajBroj = () => {
		var krug = 0;
		var brojac = 1;
		var r = red - 1;
		var k = kolona - 1;
		var rf = red;
		var kf = kolona;
		while (brojac < red * kolona) {
			for (let i = 0; i < kf - krug; i++) {
				if (k > 0 + krug) {
					if (inputRef[r][k].current.value === '')
						inputRef[r][k--].current.value = `${brojac++}`;
				}
				//console.log(`${r} ${k}`);
			}
			// if (krug > 0) {
			// 	r -= krug;
			// 	k += krug;
			// }
			for (let i = 0; i < rf - krug; i++) {
				if (r > 0 + krug) {
					if (inputRef[r][k].current.value === '')
						inputRef[r--][k].current.value = `${brojac++}`;
				}
				//console.log(`${r} ${k}`);
			}

			for (let i = 0; i < kf - krug; i++) {
				if (k < kolona - 1 - krug) {
					if (inputRef[r][k].current.value === '')
						inputRef[r][k++].current.value = `${brojac++}`;
				}
				//console.log(`${r} ${k}`);
			}

			for (let i = 0; i < rf - krug; i++) {
				if (r < red - 2 - krug) {
					if (inputRef[r][k].current.value === '')
						inputRef[r++][k].current.value = `${brojac++}`;
				}
				//console.log(`${r} ${k}`);
			}

			krug++;
			if (r === k && inputRef[r][k].current.value === '') {
				inputRef[r][k].current.value = `${brojac++}`;
			}
			if (krug === red) return;
		}
	};
	console.log(inputRef);
	let rows = [];
	for (var i = 0; i < red; i++) {
		let rowID = `${i}`;
		let cell = [];

		for (var j = 0; j < kolona; j++) {
			let cellID = `${i}${j}`;
			inputRef[i][j] = React.createRef();

			if (i === red - 1 && j === kolona - 1) {
				cell.push(
					<input
						value=""
						ref={inputRef[i][j]}
						key={cellID}
						id={cellID}
						className="kocka prva"
						readOnly
					/>
				);
			} else {
				cell.push(
					<input
						value=""
						ref={inputRef[i][j]}
						key={cellID}
						id={cellID}
						className="kocka"
						readOnly
					/>
				);
			}
		}
		rows.push(
			<div key={i} id={rowID} className="red">
				{cell}
			</div>
		);
	}
	return (
		<Fragment>
			{rows.length > 0 && (
				<input
					type="submit"
					value="POPUNI TABELU"
					className="maloDugme"
					onClick={dodajBroj}
				/>
			)}
			{rows}
		</Fragment>
	);
};

export default Tabela;
