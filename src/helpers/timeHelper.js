import { format } from "date-fns"

const DATE_FORMAT = 'MM/dd/yyyy';
const WEEK_DAY_FORMAT = 'eeee';

export const formatDate = (date) => format(new Date(date * 1000), DATE_FORMAT);
export const formatWeekDay = (date) => format(new Date(date * 1000), WEEK_DAY_FORMAT);