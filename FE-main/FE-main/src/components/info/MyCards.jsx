import React from "react";
import { basicAPI } from "../../assets/api/core";
import { mainImg, userImg } from "../../assets/images";
import MainCard from "../MainCard";
import { BASCI_URL } from "../../assets/api/core";
import { Link } from "react-router-dom";

export default function MyCards({ placeList }) {
  const maxItemsToShow = 6;

  const getGridDimensions = () => {
    const itemsToShow = Math.min(placeList.length, maxItemsToShow);
    const rows = Math.ceil(itemsToShow / 3);
    const cols = 3;
    return { rows, cols };
  };

  let emptyList;
  if (placeList.length > 6) {
    placeList = placeList.slice(0, 6);
  }
  if (placeList.length > 3) {
    emptyList = Array(Math.max(maxItemsToShow - placeList.length, 0)).fill(0);
  } else {
    emptyList = Array(Math.max(3 - placeList.length, 0)).fill(0);
  }

  const { rows, cols } = getGridDimensions();

  return (
    <div className={`grid grid-rows-${rows} grid-cols-${cols} gap-4`}>
      {placeList.map((item) => (
        <Link to={`/place/${item.id}`}>
          <MainCard
            key={item.id}
            src={`${BASCI_URL.slice(0, -1)}${item.placeImageUrl}`}
            location={item.location}
            category={item.business}
            title={item.placeName}
            subTitle={item.article}
            price={item.cost}
            isBasicMode={true}
            size={"mt-1"}
          />
        </Link>
      ))}

      {emptyList &&
        emptyList.map((_, index) => (
          <div className="border-2 rounded-xl shadow-lg" key={index}>
            <img src={userImg.storeEmpty} alt="Placeholder" />
          </div>
        ))}
    </div>
  );
}
