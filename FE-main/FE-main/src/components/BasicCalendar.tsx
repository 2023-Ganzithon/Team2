import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { BasicCalendarStyle } from "../styles/form/formStyle";
import dayjs from "dayjs";

interface props {
  disabledDates: number[];
}

const BasicCalendar = ({ disabledDates }: props) => {
  const disabledDateList = [];
  let tempDate = Math.min(...disabledDates);
  while (tempDate < Math.max(...disabledDates)) {
    disabledDateList.push(dayjs.unix(tempDate).toDate());
    tempDate += 86400;
  }

  const [state, setState] = useState<object[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <BasicCalendarStyle>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        disabledDates={disabledDateList}
        dragSelectionEnabled={false}
      />
    </BasicCalendarStyle>
  );
};

export default BasicCalendar;
