import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
	return _.round(_.sum(data) / data.length);
}

export default ({ data, units, color }) => {
	return (
		<div>
			<Sparklines data={data} height={120} width={180}>
				<SparklinesLine color={color} />
				<SparklinesReferenceLine type="avg" />
				<div>Average: {average(data)} {units}</div>
			</Sparklines>
		</div>
	);
}