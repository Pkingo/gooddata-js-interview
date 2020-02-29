import React, { useState } from 'react';

import { ColumnChart } from '@gooddata/react-components';
import {getMonthFilter} from '../utils/getMonthFilter';
import moment from 'moment';

export function ColumnChartPerMonth({measures, projectId}) {
  const [selectedMonth, setSelectedMonth] = useState(0);

  const renderDropdownOption = (month, value) => (
    <option key={value} value={value}>{month}</option>
  )
		
	const onDropdownSelect = (event) => {
		setSelectedMonth(Number(event.currentTarget.value));
	}

	const renderDropdown = () => {
		const options = moment.months().map(renderDropdownOption);
		return <select onChange={onDropdownSelect} defaultValue="0">{options}</select>;
	}

  return (
    <React.Fragment>
      <h1>$ Gross Profit in month {renderDropdown()} 2016</h1>
      <div>
        <ColumnChart {...{
            measures,
            filters: [getMonthFilter(selectedMonth)],
            projectId,
          }}
        />
      </div>
    </React.Fragment>
  );
}
