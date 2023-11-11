import React from "react";

const LoginButton = ({
  content,
  color,
  type = "button",
  onClickEvent,
  size,
  minSize,
}) => {
  return (
    <button
      className={`flex justify-center items-center rounded-xl p-3.5 font-semibold min-w-[12rem] ${
        color === "red" ? "text-my-red" : "text-my-green"
      } 
      ${size}
      ${minSize}
      `}
      style={{ boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.25)" }}
      onClick={onClickEvent}
      type={type}
    >
      {content}
    </button>
  );
};

export default LoginButton;
