import React from 'react';
import {histogram, max} from 'd3-array';
import {linear} from 'd3-scale';
import {area, basis} from 'd3-shape';

export default function Distribution({values}) {
	const abscisa = linear().domain([0, 1]).range([0, 300]);
	const hist = histogram().domain(abscisa.domain()).thresholds(abscisa.ticks(20));
	const bins = hist(values);
	const ordinata = linear().domain([0, max(bins, b => b.length)]).range([120, 0]);
	const p = area().x(b => abscisa(b.x0)).y1(b => ordinata(b.length)).y0(120).curve(basis);

	return (
		<article>
			<svg width={300} height={120}>
				<path fill="rgba(0, 0, 255, 0.6)" d={p(bins)} />
			</svg>
		</article>
	);
}
