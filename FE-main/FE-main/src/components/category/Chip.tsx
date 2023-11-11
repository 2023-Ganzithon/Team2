import { Icon } from "../../assets/images";

interface props {
  color: "red" | "green";
  size?: "small" | "normal";
  chipInfo: string;
  isPicked: boolean;
  onClickEvent?: (chipInfo: string) => void;
}

const Chip = ({
  color,
  size = "normal",
  chipInfo,
  isPicked,
  onClickEvent,
}: props) => {
  let src = "";
  if (color === "red") {
    switch (chipInfo) {
      case "요식업":
        src = Icon.food;
        break;
      case "주점":
        src = Icon.wine;
        break;
      case "제조업":
        src = Icon.hammer;
        break;
      case "도소매":
        src = Icon.box;
        break;
      default:
        src = "#";
    }
  }
  return (
    <div
      className={`flex justify-center items-center border border-solid cursor-pointer font-semibold ${
        color === "red"
          ? "border-my-red text-my-red"
          : "border-my-green text-my-green"
      } ${
        color === "red"
          ? isPicked
            ? "bg-my-light-red"
            : "bg-white"
          : isPicked
          ? "bg-my-light-green"
          : "bg-white"
      }
      ${
        size === "small"
          ? "w-fit min-w-fit text-xs px-4 py-1 rounded-lg"
          : "min-w-[5.875rem] p-2 rounded-xl"
      }`}
      onClick={() => onClickEvent && onClickEvent(chipInfo)}
    >
      {color === "red" && chipInfo !== "전체" && size !== "small" && (
        <img className="w-[20px] h-[20px] mr-[6px]" src={src} />
      )}
      {chipInfo}
    </div>
  );
};

export default Chip;
