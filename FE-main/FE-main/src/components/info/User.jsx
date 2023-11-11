import React from "react";

export default function User({ label, value, color }) {
  return (
    <div className="flex justify-between items-center py-3">
      <div className={`w-[30%] border-r-[0.5px] border-${color}`}>{label}</div>
      <div className="w-[50%] font-light whitespace-nowrap">{value}</div>
    </div>
  );
}
