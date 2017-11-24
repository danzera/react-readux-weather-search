import React from 'react';

export default props => {
	console.log('props received', props);

	return (
		<tr>
			<td>
				{props.cityData.city.name}
			</td>
		</tr>
	);
}