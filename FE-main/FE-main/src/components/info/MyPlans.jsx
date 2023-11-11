import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyPlans({
  id,
  renterId,
  placeId,
  startDate,
  endDate,
  ceoId,
}) {
  const navigate = useNavigate();
  return (
    <div
      className="mb-10 px-10 py-6 border-2 shadow-md rounded-3xl cursor-pointer"
      onClick={() => navigate(`/booking/detail/${id}`)}
    >
      <div className="flex justify-between items-center">
        <h1>
          {startDate} ~ {endDate}
        </h1>
      </div>
      <div className="mt-6 flex justify-between items-center font-bold text-xl">
        <h1 className="ml-3 w-[40%] border-r-[1px] border-black">{placeId}</h1>
        <h2 className="w-[20%]">공간이용자</h2>
        <h2 className="w-[30%] tracking-wider font-semibold">{renterId}</h2>
      </div>
    </div>
  );
}
