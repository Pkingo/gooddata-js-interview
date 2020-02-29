import React, { Component } from 'react';

import { ColumnChart } from '@gooddata/react-components';
import {getMonthFilter} from '../utils/getMonthFilter';
import moment from 'moment';

export class ColumnChartPerMonth extends Component{
  constructor(props) {
    super(props);
    this.state = {
      filters: [getMonthFilter(0)],
    }
  }

  renderDropdownOption(month, value) {
		return <option key={value} value={value}>{month}</option>
	}
		
	onDropdownSelect = (event) => {
		this.setState({filters: [getMonthFilter(Number(event.currentTarget.value))]});
	}

	renderDropdown() {
		const options = moment.months().map(this.renderDropdownOption);
		return <select onChange={this.onDropdownSelect} defaultValue="0">{options}</select>;
	}

  render() {
    const {filters} = this.state;
    const {measures, projectId} = this.props;

    return (
      <React.Fragment>
        <h1>$ Gross Profit in month {this.renderDropdown()} 2016</h1>
        <div>
          <ColumnChart {...{
              measures,
              filters,
              projectId,
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}
