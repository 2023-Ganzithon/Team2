import Chip from "./category/Chip";
import ScrollOut from "scroll-out";

export default function MainCard({
  location,
  category,
  title,
  subTitle,
  price,
  src,
  isBasicMode = false,
  size,
  dataScroll,
}) {
  return (
    <li
      {...(dataScroll ? { "data-scroll": "" } : {})}
      className={`main-card border-[#11434A] rounded-lg cursor-pointer ${
        isBasicMode
          ? "w-full max-w-[18.75rem]"
          : "max-w-fit border-[0.1px] card-skew"
      } ${size}`}
      style={{
        boxShadow: `${
          isBasicMode ? "0px 0px 4px 3px rgba(0, 0, 0, 0.25)" : ""
        }`,
      }}
    >
      <img className="image-quality-improve" src={src} alt="공유공간 카드" />
      <div className="px-5 py-6">
        <header className={`flex gap-1`}>
          <Chip
            color={"green"}
            size={"small"}
            chipInfo={location}
            isPicked={true}
            onClickEvent={null}
          ></Chip>
          <Chip
            color={"red"}
            size={"small"}
            chipInfo={category}
            isPicked={true}
            onClickEvent={null}
          ></Chip>
        </header>
        <main className="mt-6">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-sm mt-3 font-light line-clamp-2">
            {subTitle.trim()}
          </p>
        </main>
        <aside className="mt-8 text-xl flex justify-end">
          <span className="mr-1">월</span>
          <span className="mr-1">{price}</span>
          <span>원</span>
        </aside>
      </div>
    </li>
  );
}
