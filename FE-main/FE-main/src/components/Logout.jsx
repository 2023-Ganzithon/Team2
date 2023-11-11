import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { removeAccessTokenFromLocalStorage } from "../assets/api/token";
import { removeUserInfoFromLocalStorage } from "../assets/api/userInfo";
import { userImg } from "../assets/images";

export default function Logout({ handleIsLogout, isCEO }) {
  const handleClickLogout = () => {
    removeUserInfoFromLocalStorage();
    removeAccessTokenFromLocalStorage();
    handleIsLogout();
  };
  return (
    <div className="flex flex-col items-center">
      <Link to="/my">
        {isCEO ? (
          <img className="w-[45px] h-[45px]" src={userImg.ceo} />
        ) : (
          <img className="w-[45px] h-[45px]" src={userImg.user} />
        )}
      </Link>
      <Link to="/">
        <p
          onClick={handleClickLogout}
          className={`mt-1 font-light  ${
            isCEO ? "text-my-green" : "text-my-deep-red"
          }`}
        >
          로그아웃
        </p>
      </Link>
    </div>
  );
}
