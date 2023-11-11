// import React from "react";

interface props {
  content: string;
  color: "green" | "red";
  type: "submit" | "button";
  onClickEvent: () => void;
  width?: string;
  size?: "normal" | "small";
}

const BaisicButton = ({
  content,
  color,
  type = "button",
  onClickEvent,
  width = "18.75rem",
  size = "normal",
}: props) => {
  return (
    <button
      className={`flex justify-center items-center rounded-md p-4 ${
        color === "red" ? "text-my-red" : "text-my-green"
      }
      ${
        size === "normal"
          ? "min-w-[12rem] font-semibold"
          : "!w-[5rem] h-[1.5rem] font-normal text-xs"
      }`}
      style={{
        boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.25)",
        width: `${width}`,
      }}
      onClick={onClickEvent}
      type={type}
    >
      {content}
    </button>
  );
};

export default BaisicButton;
