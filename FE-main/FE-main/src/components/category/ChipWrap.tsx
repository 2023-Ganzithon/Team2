import { useEffect, useState } from "react";
import Chip from "./Chip";

interface props {
  filteringList: string[];
  type: "business" | "location";
  allPicked?: boolean;
  pickEvent?: (pickedList: string[]) => void;
  isMultiSelect?: boolean;
}

const ChipWrap = ({
  filteringList,
  type,
  allPicked = false,
  pickEvent,
  isMultiSelect,
}: props) => {
  const [picked, setPicked] = useState<string[]>(isMultiSelect ? ["전체"] : []);

  const clickChipEvent = (currentChip: string) => {
    const _picked = JSON.parse(JSON.stringify(picked));

    if (currentChip === "전체") {
      setPicked(["전체"]);
    } else {
      if (isMultiSelect) {
        if (_picked.includes("전체")) {
          const totalChipIndex = _picked.findIndex(
            (_chip: string) => _chip === "전체"
          );
          _picked.splice(totalChipIndex, 1);
        }

        const currPickedChipIndex = _picked.findIndex(
          (_chip: string) => _chip === currentChip
        );

        if (currPickedChipIndex > -1) {
          _picked.splice(currPickedChipIndex, 1);
        } else {
          _picked.push(currentChip);
        }

        setPicked(_picked);
      } else {
        setPicked([currentChip]);
      }
    }
  };

  useEffect(() => {
    pickEvent && pickEvent(picked);
  }, [picked]);

  return (
    <div className={`flex gap-6`}>
      {filteringList.map((category) => (
        <Chip
          key={category}
          color={type === "business" ? "red" : "green"}
          chipInfo={category}
          isPicked={allPicked ? allPicked : picked.includes(category)}
          onClickEvent={clickChipEvent}
        ></Chip>
      ))}
    </div>
  );
};

export default ChipWrap;
