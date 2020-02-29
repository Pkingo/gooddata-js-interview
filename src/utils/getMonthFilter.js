import moment from 'moment';
import { isNumber } from 'util';
const dateAttribute = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180';

export function getMonthFilter(month) {
	if (!isNumber(month)) {
		throw new Error(`Month must be a number. ${typeof month} given`);
	}
	if (month < 0 || month > 11) {
		throw new Error(`Invalid month ${month}. Month number be between 0 and 11`);
	}
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