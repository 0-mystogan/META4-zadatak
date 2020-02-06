import React from 'react';
import Table from './Tabela';
import Alert from './Alert';

const Output = () => {
	return (
		<div>
			<div className="naslov">OUTPUT</div>
			<div className="main" id="main">
				<Alert />
				<Table />
			</div>
		</div>
	);
};

export default Output;
