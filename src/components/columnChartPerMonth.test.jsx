import React from 'react';
import {render, getNodeText, fireEvent} from '@testing-library/react';
import { ColumnChartPerMonth } from './columnChartPerMonth';
import {getMonthFilter} from '../utils/getMonthFilter';

jest.mock("../utils/getMonthFilter", () => {
  return {
    getMonthFilter: jest.fn((i) => {
      return {
        absoluteDateFilter: {
          dataSet: {
            uri: "/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180",
          },
          from: "2016-04-01",
          to: "2016-04-30",
        }
      }
    })
  }
})

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

describe("Column chart per month", () => {
  it("has a dropdown with the 12 months", () => {
    const {getAllByRole} = render(<ColumnChartPerMonth />);
    const options = getAllByRole("option");
    expect(options).toHaveLength(12)
    options.map((option, index) => {
      expect(getNodeText(option)).toBe(months[index]);
    })
  });
  it("calls getMonthFilter with update month when a new month is selected", () => {
    const {getByRole} = render(<ColumnChartPerMonth />);
    getMonthFilter.mockClear();
    fireEvent.change(getByRole("listbox"), { target: { value: "2" } });
    expect(getMonthFilter).toHaveBeenCalledTimes(1);
    expect(getMonthFilter).toHaveBeenCalledWith(2);
  });
})