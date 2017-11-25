import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default function({ data, color }) {
	return (
		<Sparklines data={data} height={120} width={180}>
			<SparklinesLine color={color} />
		</Sparklines>
	);
}