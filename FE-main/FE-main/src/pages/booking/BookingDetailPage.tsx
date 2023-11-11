import Title from "../../components/common/Title";
import SubTitleSection from "../../components/common/SubTitleSection";
import { useCallback, useEffect, useState } from "react";
import { getBookingDetailApi } from "../../assets/api/booking";
import { useLocation } from "react-router-dom";

const BookingDetailPage = () => {
  const location = useLocation();
  const [booking, setBooking] = useState<any[] | null>(null);
  const getBookingData = useCallback(async () => {
    const response = await getBookingDetailApi(
      Number(location.pathname.split("/")[3])
    );

    if (response.status >= 200) {
      setBooking([
        [
          {
            title: "이름",
            content: response.data.name,
          },
          {
            title: "전화번호",
            content: response.data.phone,
          },
        ],
        [
          {
            title: "업종",
            content: response.data.business,
          },
          {
            title: "희망 계약 기간",
            content: `${response.data.startDate} - ${response.data.endDate}`,
          },
        ],
        [
          {
            title: "",
            content: response.data.information,
          },
        ],
        [
          {
            title: "",
            content: response.data.inquiry,
          },
        ],
      ]);
    }
  }, [location]);

  useEffect(() => {
    getBookingData();
  }, []);

  return (
    <article className={`flex w-full flex-col gap-10`}>
      <Title title={"사업 계획서"}></Title>
      {booking && (
        <>
          <SubTitleSection
            subTitle={"이용자 정보"}
            data={booking[0]}
          ></SubTitleSection>
          <SubTitleSection
            subTitle={"계약 정보"}
            data={booking[1]}
          ></SubTitleSection>
          <SubTitleSection
            subTitle={"사업 정보"}
            data={booking[2]}
          ></SubTitleSection>
          <SubTitleSection
            subTitle={"문의사항"}
            data={booking[3]}
          ></SubTitleSection>
        </>
      )}
    </article>
  );
};

export default BookingDetailPage;
