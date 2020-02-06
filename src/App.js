import React from 'react';
import Input from './component/Input';
import Output from './component/Output';
import './App.css';

import ZadatakState from './context/zadatak/ZadatakState';
import AlertState from './context/alert/AlertState';

const App = () => {
	return (
		<ZadatakState>
			<AlertState>
				<div className="container">
					<div className="input">
						<Input />
					</div>
					<div className="output">
						<Output />
					</div>
				</div>
			</AlertState>
		</ZadatakState>
	);
};

export default App;
