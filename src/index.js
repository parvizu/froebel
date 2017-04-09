import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header'

export default class Froebel {

	render() {
		return(
			<div>
				<Header />
			</div>
		);
	}
}

ReactDOM.render(<Froebel />, document.getElementById('app'));