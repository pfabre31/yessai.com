import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
};

export const DateFormatterString = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return format(date, "LLLL	d, yyyy");
};

export default DateFormatter;
