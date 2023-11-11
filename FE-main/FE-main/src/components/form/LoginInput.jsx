import React from "react";

export default function LoginInput({
  id,
  type,
  label,
  placeholder,
  value,
  onChange,
  errorMessage,
  onBlur,
}) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <label htmlFor={id} className="text-my-green font-bold">
          {label}
        </label>
        <input
          id={id}
          name={id}
          className="join-input w-[75%] border-[1px] border-my-green rounded-lg px-4 py-2 outline-none"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      <div className="w-[100%] flex flex-col items-end mt-2">
        {errorMessage &&
          errorMessage.map((message, index) => (
            <div
              key={index}
              className={`px-3 w-[75%] text-[12px] ${
                message.includes("✅") ? "text-my-green" : "text-my-error"
              }`}
            >
              {message}
            </div>
          ))}
      </div>
    </div>
  );
}
