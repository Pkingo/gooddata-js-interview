// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from 'react';
import '@gooddata/react-components/styles/css/main.css';

import { ColumnChartPerMonth } from './components/columnChartPerMonth';
import { ColumnChartAllMonths } from './components/columnChartAllMonths';
import { getMeasures } from './utils/getMeasures';

const projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';
const measures = getMeasures();

function App() {
	return (
		<div className="App">
			<ColumnChartPerMonth {...{projectId, measures}}/>
			<ColumnChartAllMonths {...{projectId, measures}}/>
		</div>
	);
}


export default App;
