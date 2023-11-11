import FormDateRangePicker from "../form/FormDateRangePicker";
import FormTextArea from "../form/FormTextArea";
import FormInput, { InputType } from "../form/FormInput";

export type formInfo = {
  formType: "input" | "text-area" | "date-range";
  subTitle: string | null;
  name: string;
  placeholder: string;
  type?: InputType;
  disabled?: boolean;
  required?: boolean;
  accept?: string;
  endDecorator?: {
    type: "button";
    content: string;
    onClickEvent: (value: any) => void | null;
  };
};

interface props {
  title: string | null;
  data: formInfo[];
}

const BookingSection = ({ title, data }: props) => {
  return (
    <section className={`flex flex-col px-20`}>
      {title && (
        <div
          className={`basic-border-bottom py-2 w-full flex justify-start font-bold text-xl text-my-green`}
        >
          {title}
        </div>
      )}
      <div className={`w-full flex flex-col justify-start gap-8 px-12 pt-12`}>
        {data.map((_data, index) => (
          <div className={`flex gap-8 w-full items-center`} key={index}>
            {_data.subTitle && (
              <div
                className={`font-semibold text-lg text-my-green min-w-[10rem]`}
              >
                {_data.subTitle}
              </div>
            )}
            {_data.formType === "input" ? (
              <FormInput
                name={_data.name}
                placeholder={_data.placeholder}
                type={_data.type ?? "text"}
                disabled={_data.disabled ?? false}
                required={_data.required ?? false}
                endDecorator={_data.endDecorator}
              ></FormInput>
            ) : _data.formType === "text-area" ? (
              <FormTextArea
                name={_data.name}
                placeholder={_data.placeholder}
                disabled={_data.disabled ?? false}
                required={_data.required ?? false}
              ></FormTextArea>
            ) : (
              <FormDateRangePicker
                name={_data.name}
                disabled={_data.disabled ?? false}
                required={_data.required ?? false}
              ></FormDateRangePicker>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookingSection;
