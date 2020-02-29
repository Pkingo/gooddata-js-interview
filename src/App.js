// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';

import { ColumnChart } from '@gooddata/react-components';
import moment from 'moment';

const grossProfitMeasure = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877';
const dateAttributeInMonths = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142';
const dateAttribute = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180';

class App extends Component {
	constructor(props) {
    super(props)
		this.state = {
      projectId: 'xms7ga4tf3g3nzucd8380o2bev8oeknp',
			filters: [this.getMonthFilter(0)],
			measures: this.getMeasures(),
			viewBy: this.getViewBy(),
		};
	}

getMonthFilter(month) {
  const date = new Date(2016, month + 1, 0)
  const from = moment(date).startOf('month').format('YYYY-MM-DD');
  const to   = moment(date).endOf('month').format('YYYY-MM-DD');
	return {
		absoluteDateFilter: {
			dataSet: {
				uri: dateAttribute
			},
			from,
			to
		}
	}
}

	getMeasures() {
		return [{
			measure: {
				localIdentifier: 'm1',
					definition: {
						measureDefinition: {
							item: {
								uri: grossProfitMeasure
							}
						}
					},
					alias: '$ Gross Profit'
				}
			}
		]
	}

	getViewBy() {
		return {
			visualizationAttribute: {
				displayForm: {
					uri: dateAttributeInMonths
				},
				localIdentifier: 'a1'
			}
		}
	}

	renderDropdownOption(month, value) {
		return <option key={value} value={value}>{month}</option>
	}
		
	onDropdownSelect = (event) => {
		this.setState({filters: [this.getMonthFilter(event.currentTarget.value)]});
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
