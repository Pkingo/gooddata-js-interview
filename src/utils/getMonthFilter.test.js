import {getMonthFilter} from './getMonthFilter';

describe("getMonthFilter", () => {
  it("returns a month filter object if given a valid month number (0-11)", () => {
    const firstDayOf4thMonth = "2016-04-01";
    const lastDayOf4thMonth = "2016-04-30"; 
    expect(getMonthFilter(3)).toMatchObject({
      absoluteDateFilter: {
        dataSet: {
          uri: "/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180",
        },
        from: firstDayOf4thMonth,
        to: lastDayOf4thMonth,
      }
    });
  });
  it("throws an error, if NaN is given as argument", () => {
    expect(() => {
      getMonthFilter("Not a number");
    }).toThrowError(/month must be a number/i);
  });
  it("throws an error, if an invalid month number is given, e.g. not between 0 and 11", () => {
    expect(() => {
      getMonthFilter(12);
    }).toThrowError(/month number be between 0 and 11/i);
  });
});
