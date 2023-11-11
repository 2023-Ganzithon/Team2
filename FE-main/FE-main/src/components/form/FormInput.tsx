import { Controller } from "react-hook-form";
import Input from "@mui/joy/Input";
import { FormInputStyle } from "../../styles/form/formStyle";
import BaisicButton from "../button/BaisicButton";

export type InputType = "text" | "number" | "password" | "file";

interface props {
  name: string;
  placeholder: string;
  type: InputType;
  disabled: boolean;
  required: boolean;
  endDecorator?: {
    type: "button";
    content: string;
    onClickEvent: (value: any) => void | null;
  } | null;
}

const FormInput = ({
  name,
  placeholder,
  type,
  disabled = false,
  required = false,
  endDecorator = null,
}: props) => {
  return (
    <FormInputStyle>
      <Controller
        name={name}
        rules={{ required: required }}
        render={({ field }) => (
          <>
            {type === "file" && (
              <div className={`flex justify-between`}>
                <input
                  className={`upload-name flex-grow`}
                  value={field.value}
                  placeholder={placeholder}
                />
                <label
                  htmlFor={`${name}-file`}
                  className={`flex justify-center items-center rounded-md p-4 text-my-green !w-[5rem] h-[1.5rem] font-normal text-xs cursor-pointer`}
                  style={{
                    boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  첨부하기
                </label>
              </div>
            )}
            <Input
              id={type === "file" ? `${name}-file` : ""}
              className={`${type === "file" ? "!hidden" : ""}`}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              // inputProps={{ accept: accept }}
              endDecorator={
                <>
                  {endDecorator ? (
                    endDecorator.type === "button" ? (
                      <BaisicButton
                        content={endDecorator.content}
                        color={"green"}
                        type={"button"}
                        onClickEvent={() => {
                          endDecorator.onClickEvent &&
                            endDecorator.onClickEvent(field.value);
                        }}
                        size={"small"}
                      />
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}
                </>
              }
              {...field}
            />
          </>
        )}
      />
    </FormInputStyle>
  );
};

export default FormInput;
