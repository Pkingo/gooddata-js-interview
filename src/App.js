// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';

import { ColumnChart } from '@gooddata/react-components';
import moment from 'moment';

import {getMonthFilter} from './utils/getMonthFilter';
import {getMeasures} from './utils/getMeasures';
import {getViewBy} from './utils/getViewBy';


class App extends Component {
	constructor(props) {
    super(props)
		this.state = {
      projectId: 'xms7ga4tf3g3nzucd8380o2bev8oeknp',
			filters: [getMonthFilter(0)],
			measures: getMeasures(),
			viewBy: getViewBy(),
		};
	}

	renderDropdownOption(month, value) {
		return <option key={value} value={value}>{month}</option>
	}
		
	onDropdownSelect = (event) => {
		this.setState({filters: [getMonthFilter(event.currentTarget.value)]});
	}

	renderDropdown() {
		const options = moment.months().map(this.renderDropdownOption);
		return <select onChange={this.onDropdownSelect} defaultValue="0">{options}</select>;
	}

	render() {
		const {
			projectId,
			filters,
			measures,
			viewBy,
		} = this.state;

		return (
			<div className="App">
				<h1>$ Gross Profit in month {this.renderDropdown()} 2016</h1>
				<div>
					<ColumnChart
						measures={measures}
						filters={filters}
						projectId={projectId}
					/>
				</div>
				<h1>$ Gross Profit - All months</h1>
				<div>
					<ColumnChart
						measures={measures}
						viewBy={viewBy}
						projectId={projectId}
					/>
				</div>
			</div>
		);
	}
}

export default App;
