import React, { useEffect, useState } from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import { getUserInfoApi } from "../../assets/api/user";
import { getUserInfoFromLocalStorage } from "../../assets/api/userInfo";
import { JoinImg, mainImg, userImg } from "../../assets/images";
import LoginButton from "../../components/button/LoginButton";
import Divider from "../../components/Divider";
import MyCards from "../../components/info/MyCards";
import MyPlans from "../../components/info/MyPlans";
import User from "../../components/info/User";
import MainCard from "../../components/MainCard";

export default function MyPage() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { id } = getUserInfoFromLocalStorage();
        const data = await getUserInfoApi(`${id}`);
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserInfo();
  }, []);

  const userLabel = {
    realname: "이름",
    phone: "전화번호",
    username: "아이디",
    licenseNum: "대표 사업자 등록번호",
    business: "업종",
    location: "사업장 위치",
  };

  const userField = ["realname", "phone", "username"];
  const userPlaceField = ["licenseNum", "business", "location"];
  const color = user.is_ceo ? "my-green" : "my-red";
  const navigate = useNavigate();

  if (!loading)
    return (
      <section className={`flex flex-col py-10 text-${color}`}>
        <div className="relative pb-20 w-full">
          <h1 className="font-bold text-4xl text-center"> 마이 페이지</h1>
        </div>
        <Divider color={color} />
        <div className="px-[20%] xl:px-[28%] py-10 font-semibold text-xl">
          {userField.map((field, index) => (
            <User
              key={index}
              label={userLabel[field]}
              value={user[field]}
              color={color}
            />
          ))}
        </div>
        <Divider color={color} />
        {user.is_ceo && user.placeList.length > 0 && (
          <div className="px-[20%] xl:px-[28%] py-10  font-semibold text-xl">
            {userPlaceField.map((field, index) => (
              <User
                key={index}
                label={userLabel[field]}
                value={user.placeList[0][field]}
                color={color}
              />
            ))}
          </div>
        )}
        {user.is_ceo && (
          <div className="py-20">
            <div className="px-[10%] relative h-[20px]">
              <h1 className={`font-bold text-2xl text-${color}`}>
                등록된 공유 공간
              </h1>
            </div>
            <div className="flex justify-end">
              <LoginButton
                content="공유공간 추가 등록"
                minSize="min-w-[10rem]"
                size={"mt-10 p-0]"}
                onClickEvent={() => {
                  navigate("/place/create");
                }}
              />
            </div>
            <ul className="mt-20 flex justify-center">
              <MyCards placeList={user.placeList} />
            </ul>
          </div>
        )}
        {user.placeList.length > 0 && (
          <>
            <div className="px-[10%] py-10">
              <h1 className={`font-bold text-2xl text-${color}`}>
                나의 계약 내역
              </h1>
            </div>
            <div className="px-[10%]">
              {user.planList.map((item) => (
                <MyPlans
                  id={item.id}
                  ceoId={item.ceoId}
                  renterId={item.renterId}
                  placeId={item.placeId}
                  startDate={item.startDate}
                  endDate={item.endDate}
                />
              ))}
            </div>
          </>
        )}
      </section>
    );
}
