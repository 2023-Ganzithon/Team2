import { useState } from "react";
import { DateRangePicker } from "react-date-range";
// import { ko } from "react-date-range/dist/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import dayjs from "dayjs";
import { Controller } from "react-hook-form";
import {
  FormDatePickerCalendarStyle,
  FormInputStyle,
} from "../../styles/form/formStyle";

interface props {
  name: string;
  disabled: boolean;
  required: boolean;
}

// const FormDatePickerCalendarStyle = styled.div`
//   & {
//     width: 100%;
//     position: absolute;
//     top: calc(100% + 0.25rem);
//     z-index: 1;

//     .rdrDefinedRangesWrapper,
//     .rdrDateDisplayWrapper {
//       display: none;
//     }
//     .rdrDayToday .rdrDayNumber span:after {
//       background: #fff;
//     }
//     .rdrDateRangePickerWrapper {
//       width: 100%;
//     }
//     .rdrCalendarWrapper {
//       width: 100%;
//       border-radius: 0.5rem;
//       border: 1px solid var(--gray-70);
//       background: var(--gray-100);
//       box-shadow: 0px 8px 24px 0px rgba(25, 32, 41, 0.16);
//     }
//     .rdrMonthsHorizontal > .rdrMonth {
//       width: 100%;
//     }
//   }
// `;

const FormDateRangePicker = ({
  name,
  disabled = false,
  required = false, // data,
}: props) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarState, setCalendarState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleClickOpenCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  // useEffect(() => {
  //   if (field.value) {
  //     const _startDate = field.value.selection
  //       ? field.value.selection.startDate
  //       : typeof field.value === "string"
  //       ? new Date(field.value)
  //       : field.value;

  //     const _endDate = field.value.selection
  //       ? field.value.selection.endDate
  //       : typeof field.value === "string"
  //       ? new Date(field.value)
  //       : field.value;

  //     setCalendarState([
  //       {
  //         startDate: _startDate,
  //         endDate: _endDate,
  //         key: "selection",
  //       },
  //     ]);
  //   }
  // }, [field]);

  return (
    <>
      {/* <FormComponentTitle title={data.title} width={data.width ?? "100"}> */}
      <Controller
        name={name}
        rules={{ required: required }}
        render={({ field }) => (
          <div className={`relative flex gap-1 items-center`}>
            <FormInputStyle disabled={disabled}>
              <input
                type="text"
                readOnly
                onClick={() => {
                  handleClickOpenCalendar();
                  if (!field.value)
                    field.onChange(dayjs(new Date()).format("YYYY.MM.DD"));
                }}
                value={
                  field.value
                    ? field.value.selection && field.value.selection.startDate
                      ? `${dayjs(field.value.selection.startDate).format(
                          "YYYY.MM.DD"
                        )}`
                      : field.value
                    : ""
                }
                placeholder={"시작일"}
                disabled={disabled}
              />
            </FormInputStyle>
            <div> ~ </div>
            <FormInputStyle disabled={disabled}>
              <input
                type="text"
                readOnly
                onClick={() => {
                  handleClickOpenCalendar();
                  if (!field.value)
                    field.onChange(dayjs(new Date()).format("YYYY.MM.DD"));
                }}
                value={
                  field.value &&
                  field.value.selection &&
                  field.value.selection.endDate
                    ? `${dayjs(field.value.selection.endDate).format(
                        "YYYY.MM.DD"
                      )}`
                    : ""
                }
                placeholder={"종료일"}
                disabled={disabled}
              />
            </FormInputStyle>

            {showCalendar && (
              <FormDatePickerCalendarStyle>
                <DateRangePicker
                  // locale={ko}
                  onChange={(date: any) => {
                    if (date.selection.startDate !== date.selection.endDate) {
                      setShowCalendar(!showCalendar);
                    }
                    field.onChange(date);
                    setCalendarState([date.selection]);
                  }}
                  // showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  months={1}
                  ranges={calendarState}
                  direction="horizontal"
                />
              </FormDatePickerCalendarStyle>
            )}
          </div>
        )}
      />
      {/* </FormComponentTitle> */}
    </>
  );
};

export default FormDateRangePicker;
