import React from 'react';
import {histogram, max} from 'd3-array';
import {linear} from 'd3-scale';
import {area, basis} from 'd3-shape';

export default function Distribution({values}) {
	const WIDTH = 300;
	const HEIGHT = 120;
	const abscisa = linear().domain([0, 1]).range([0, WIDTH]);
	const hist = histogram().domain(abscisa.domain()).thresholds(abscisa.ticks(20));
	const bins = hist(values);
	const ordinata = linear().domain([0, max(bins, b => b.length)]).range([HEIGHT, 0]);
	const distribution = area().x(b => abscisa(b.x0)).y1(b => ordinata(b.length)).y0(HEIGHT).curve(basis);

	return (
		<article>
			<svg width={WIDTH} height={HEIGHT}>
				<path fill="rgba(0, 0, 255, 0.6)" d={distribution(bins)} />
			</svg>
		</article>
	);
}
