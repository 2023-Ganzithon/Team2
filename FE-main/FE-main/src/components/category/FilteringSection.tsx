import ChipWrap from "./ChipWrap";

interface props {
  type: "business" | "location";
  onClickEvent: (pickedList: string[]) => void;
  isMultiSelect?: boolean;
}

const FilteringSection = ({
  type,
  onClickEvent,
  isMultiSelect = true,
}: props) => {
  const businessList = isMultiSelect
    ? ["전체", "요식업", "주점", "제조업", "도소매"]
    : ["요식업", "주점", "제조업", "도소매"];
  const locationList = isMultiSelect
    ? ["전체", "성수", "홍대", "강남", "종로", "신촌"]
    : ["성수", "홍대", "강남", "종로", "신촌"];

  const filteringList = type === "business" ? businessList : locationList;
  return (
    <section className={`flex flex-col items-center`}>
      <div className={`flex flex-col items-center gap-[1.9375rem]`}>
        <div
          className={`font-semibold text-lg ${
            type === "business" ? "text-my-red" : "text-my-green"
          }`}
        >
          {type === "business" ? "업종" : "사업장 위치"}
        </div>
        <ChipWrap
          filteringList={filteringList}
          type={type}
          pickEvent={onClickEvent}
          isMultiSelect={isMultiSelect}
        ></ChipWrap>
      </div>
    </section>
  );
};

export default FilteringSection;
