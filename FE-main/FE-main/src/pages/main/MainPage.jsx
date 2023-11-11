import React, { useEffect, useState } from "react";
import TypeIt from "typeit-react";
import Header from "../../components/Header";
import MainCard from "../../components/MainCard";
import ScrollOut from "scroll-out";
import { Swiper, SwiperSlide } from "swiper/react";
import { JSON_PATH } from "../../constants/path";
import { logo, mainImg } from "../../assets/images";
import { Link } from "react-router-dom";
import { FreeMode, Scrollbar, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

export default function MainPage() {
  const data = [
    {
      key: 1,
      src: "/images/mainPage/place-1.png",
      location: "성수",
      category: "요식업",
      title: "치즈 다이닝 in 성수",
      subTitle: "서울숲 옆 골목에 위치한 양식 전문점 입니다.",
      price: "840,000",
    },
    {
      key: 2,
      src: "/images/mainPage/place-2.png",
      location: "성수",
      category: "주점",
      title: "와인 인더스트리",
      subTitle: "넓은 식당 내부를 갖고있는 와인 바 입니다.",
      price: "739,000",
    },
    {
      key: 3,
      src: "/images/mainPage/place-3.png",
      location: "성수",
      category: "제조업",
      title: "옐로우 랩",
      subTitle: "인쇄물 제작를 전문으로 하는 사무실 입니다.",
      price: "458,000",
    },
  ];

  useEffect(() => {
    ScrollOut({
      targets: "[data-scroll]",
      once: true,
    });
  }, []);

  return (
    <main className="main flex-col xl:px-[10%]">
      <section className="pb-16 min-h-[100vh] ">
        <div
          data-scroll
          className="text-center sm:text-left text-3xl font-bold"
        >
          <h1>가게를 공유하여</h1>
          <h1 className=" sm:ml-20 mt-5">함께 성장하세요</h1>
        </div>
        <div className="mt-10 relative flex justify-center items-center">
          <h1 className="absolute top-[calc(50%-100px)] left-[calc(50%-160px)] text-5xl font-bold text-my-green">
            Open
          </h1>
          <h1 className="absolute top-[calc(50%+50px)] left-[calc(50%+60px)] text-5xl font-bold text-[#DE6655]">
            Close
          </h1>
          <img className="main-logo" src={logo.main} alt="메인 로고" />
        </div>
        <div className="mt-12 px-10 flex flex-col items-end font-bold text-3xl ">
          <h1 className="mr-20">
            <span className="font-extrabold text-[26px] sm:text-5xl">
              <TypeIt
                options={{
                  spped: 100,
                  waitUntilVisible: true,
                  startDelay: 2000,
                  cursor: false,
                }}
              >
                바로 여기
              </TypeIt>
            </span>
            <span className="whitespace-nowrap sm:ml-0">에서</span>
          </h1>
          <h1 className="mt-5 whitespace-nowrap">시작하는 새로운 사업</h1>
        </div>
      </section>
      <section className="pb-16 min-h-[100vh]">
        <div>
          <div data-scroll className="flex flex-col items-center sec-title">
            <h1 className="text-3xl font-bold">서울 핫플 5개에 위치한</h1>
            <h1 className="text-3xl font-bold mt-8">
              공유공간을 대여해보세요!
            </h1>
          </div>
          <ul className="mt-60 flex ul-cards justify-between w-full">
            {data &&
              data.map((item) => (
                <MainCard
                  key={item.key}
                  src={item.src}
                  location={item.location}
                  category={item.category}
                  title={item.title}
                  subTitle={item.subTitle}
                  price={item.price}
                  size={"border-[0.01px]"}
                  dataScroll={true}
                />
              ))}
          </ul>
        </div>
      </section>
      <section className="pb-32 min-h-[70vh]">
        <div>
          <div className="px-5">
            <div className="main-dialog flex justify-start">
              <div>
                <img
                  data-scroll
                  className="w-[580px] lg:w-[680px]"
                  src={mainImg.interview1}
                />
              </div>
            </div>
            <div className="main-dialog flex justify-end my-10">
              <img
                data-scroll
                className=" w-[580px] lg:w-[680px]"
                src={mainImg.interview2}
              />
            </div>
            <div className="main-dialog flex justify-start">
              <img
                data-scroll
                className=" w-[580px] lg:w-[680px]"
                src={mainImg.interview3}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-32">
        <div className="ml-10 flex items-end">
          <img data-scroll className="w-[300px]" src={mainImg.provider} />
          <h1 className="ml-5 mb-10 text-3xl font-semiboldtext-my-green">
            <h1 className="mb-1">사업자는</h1>
            <span className="font-extrabold">바로 여기</span>
            <span>에서</span>
          </h1>
        </div>
        <div className="flex items-center justify-center relative bottom-10 w-[90%] lg:w-[70%] h-[125px] bg-my-green text-white text-center rounded-[40px] shadow-lg">
          <p className="text-lg font-light tracking-wide">
            공간을 공유해 주면서 임대료의 부담을 덜 수 있습니다!
          </p>
        </div>
        <div className="flex items-center justify-center relative bottom-4 w-[90%] lg:w-[70%] h-[125px] bg-my-green text-white text-center rounded-[40px] shadow-lg">
          <p className="text-lg font-light tracking-wide">
            휴무일, 영업 외의 시간에 사용되지 않는 내 사업공간을 활용해 보세요!
          </p>
        </div>
        <div className="mt-24 mr-10 flex items-end justify-end">
          <h1 className="ml-5 mb-10 text-3xl font-semiboldtext-my-deep-red">
            <h1 className="mb-1">이용자는</h1>
            <span className="font-extrabold">바로 여기</span>
            <span>에서</span>
          </h1>
          <img data-scroll className="w-[300px]" src={mainImg.user} />
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center justify-center relative bottom-10 w-[90%] lg:w-[70%] h-[125px] bg-my-deep-red text-white text-center rounded-[40px] shadow-lg">
            <p className="text-lg font-light tracking-wide">
              창업 전 내 사업 아이템의 반응을 확인해 보세요!
            </p>
          </div>
          <div className="flex items-center justify-center relative bottom-4 w-[90%] lg:w-[70%] h-[125px] bg-my-deep-red text-white text-center rounded-[40px] shadow-lg">
            <p className="text-lg font-light tracking-wide">
              창업 준비중 부담스러운 임대료를 전부 지불하지 않고
              <br />
              창업 준비를 해보세요!
            </p>
          </div>
        </div>
      </section>
      <section className="py-32">
        <div className="mb-10 ">
          <h1 className="mb-32 text-2xl font-semibold text-center tracking-wide flex justify-center items-center">
            <span className="font-extrabold">지속 가능한 미래</span>
            <span className="">를 위해서</span>
            <span className="ml-4 font-extrabold text-4xl text-[#11434A]">
              바로 여기
            </span>
          </h1>
          <div className="flex flex-col">
            <img src={mainImg.environment} />
            <p className="px-10 py-12 mt-10 font-medium border-2 border-my-tree rounded-3xl tracking-wide">
              <h1 className="relative left-4 bottom-16 w-[60%] bg-white">
                <h1 data-scroll className="esg text-2xl font-bold ml-10">
                  바로 여기로 지키는 <span className="text-my-tree">환경</span>
                </h1>
              </h1>
              <article>
                <p>
                  자영업의 <span className="text-my-tree">폐업률은 80%</span>
                  입니다. 많은 사업의 도전과 폐업이 반복되면서 발생하는
                  자원낭비를 막을 수 있습니다.
                </p>
                <p className="mt-5">
                  무모하게 시작한 사업은 폐업을 할 가능성이 높습니다.
                  <br />
                  가게의 인테리어, 가구, 조리 기구, 기계, 가전제품은{" "}
                  <span className="text-my-tree">
                    폐업과 동시에 버려지고 반복되는 자원 낭비가 발생
                  </span>
                  합니다.
                </p>
                <p className="mt-5">
                  가게를 대여해서
                  <span className="text-my-tree">
                    {" "}
                    자신의 사업 아이템의 반응을 확인
                  </span>
                  하고
                  <span className="text-my-tree"> 창업에 신중한 결정</span>을
                  해볼 수 있습니다. 바로 여기를 통한{" "}
                  <span className="text-my-tree">
                    예비 창업은 폐업률을 감소시켜 불필요한 창업 자원의 낭비를
                    줄입니다.
                  </span>
                </p>
              </article>
            </p>
          </div>
        </div>
        <div className="mb-10">
          <div className="flex flex-col">
            <img src={mainImg.economic} />
            <p className="px-10 py-10 mt-10 font-medium border-2 border-my-yellow rounded-3xl tracking-wide">
              <h1 className="relative left-4 bottom-14 w-[60%] bg-white">
                <h1 data-scroll className="text-2xl font-bold ml-10 esg">
                  바로 여기로 지키는{" "}
                  <span className="text-my-yellow">경제</span>
                </h1>
              </h1>
              <article>
                <p>
                  사업자들은{" "}
                  <span className="text-my-yellow">
                    매출과 직결된 수익을 얻습니다.
                  </span>
                </p>
                <p className="mt-5">
                  하지만 높은 매출은 좋은 가게 위치의 영향을 받기 때문에{" "}
                  <span className="text-my-yellow">높은 임대료</span>를 지불하는
                  상황이 발생합니다.
                </p>
                <p className="mt-5">
                  <span className="text-my-yellow">
                    가게의 휴무일, 영업시간 외에 자신의 가게를 대여
                  </span>
                  해 주면서 대여 기간 동안의 임대료를 받아{" "}
                  <span className="text-my-yellow">
                    임대료의 부담을 덜어줍니다.
                  </span>
                </p>
              </article>
            </p>
          </div>
        </div>
        <div className="mb-10">
          <div className="flex flex-col">
            <img src={mainImg.social} />
            <p className="px-10 py-10 mt-10 font-medium border-2 border-my-purple rounded-3xl tracking-wide">
              <h1 className="relative left-4 bottom-14 w-[60%] bg-white">
                <h1 data-scroll className="text-2xl font-bold ml-10 esg">
                  바로 여기로 커지는{" "}
                  <span className="text-my-purple">사회</span>
                </h1>
              </h1>
              <article>
                <p>
                  창업 전 자신의 사업 아이템의 반응을 확인할 수 있는 기회를
                  얻기는 쉽지 않습니다.
                </p>
                <p className="mt-5">
                  <span className="text-my-purple">
                    예비 사업자들에게 사업 반응을 확인하는 기회
                  </span>
                  를 제공하면서, 부담스럽지 않은 짧은 기간의 <br />
                  임대료로 <span className="text-my-purple"> 사업을 경험</span>
                  할 수 있습니다.
                </p>
                <p className="mt-5">
                  <span className="text-my-purple">
                    청년들에게 진입장벽이 낮은 창업 기회를 제공
                  </span>
                  합니다.
                </p>
              </article>
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="flex flex-col items-center">
          <img data-scroll src={logo.store} />
          <h1 className="my-20 text-2xl font-light">
            내가 원하는 공유공간 계약 서비스
          </h1>
          <h1 className="text-4xl  font-bold tracking-wider">
            <h2>
              이제 <span className="text-5xl font-extrabold">바로여기</span>
              에서
            </h2>
            <h2 className="ml-28 mt-6">같이 사업해보세요!</h2>
          </h1>
          <Link to="/place/list">
            <div className="last-main-btn my-20 px-12 py-6 border-2 rounded-xl shadow-md text-2xl font-bold cursor-pointer">
              <span>공유 공간 찾기</span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
