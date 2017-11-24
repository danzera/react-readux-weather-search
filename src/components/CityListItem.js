import React from 'react';

export default props => {
	console.log('props received', props);

	return (
		<div>
			{props.cityData.city.name}
		</div>
	);
}