import React from 'react';

import { ColumnChart } from '@gooddata/react-components';
import {getViewBy} from '../utils/getViewBy';

export function ColumnChartAllMonths({measures, projectId}) {
  const viewBy = getViewBy();
  return (
    <React.Fragment>
      <h1>$ Gross Profit - All months</h1>
      <div>
        <ColumnChart {...{
            measures,
            viewBy,
            projectId
          }}
        />
      </div>
    </React.Fragment>
  );
}
