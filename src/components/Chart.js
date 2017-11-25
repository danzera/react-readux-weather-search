import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default ({ data, color }) => {
	return (
		<div>
			<Sparklines data={data} height={120} width={180}>
				<SparklinesLine color={color} />
			</Sparklines>
		</div>
	);
}