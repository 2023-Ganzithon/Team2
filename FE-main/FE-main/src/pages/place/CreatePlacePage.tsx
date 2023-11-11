import { useCallback, useEffect, useState } from "react";
import Title from "../../components/common/Title";
import BookingSection, {
  formInfo,
} from "../../components/booking/BookingSection";
import { FormProvider, useForm } from "react-hook-form";
import FilteringSection from "../../components/category/FilteringSection";
import FormTextArea from "../../components/form/FormTextArea";
import { createPlaceApi, validateLicenseNumApi } from "../../assets/api/place";
import FormInputPhoto from "../../components/form/FormInputPhoto";
import BaisicButton from "../../components/button/BaisicButton";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const makeBasicSectionFromData = (submitEvent: any): formInfo[] => {
  return [
    {
      formType: "input",
      subTitle: "사업자 등록번호",
      name: "licenseNum",
      placeholder: "사업자 등록번호를 입력해주세요",
      type: "number",
      disabled: false,
      required: true,
      endDecorator: {
        type: "button",
        content: "조회하기",
        onClickEvent: (value) => submitEvent(value),
      },
    },
    {
      formType: "input",
      subTitle: "임대차 계약서",
      name: "lease",
      placeholder: "임대차 계약서를 업로드해주세요",
      type: "file",
      disabled: false,
      required: true,
      accept: ".pdf",
    },
  ];
};

const makePlaceSectionFromData = (needImpossibleDate: boolean): formInfo[] => {
  return [
    {
      formType: "input",
      subTitle: "사업장 이름",
      name: "placeName",
      placeholder: "사업장 이름을 입력해주세요",
      type: "text",
      disabled: false,
      required: true,
    },
    {
      formType: "input",
      subTitle: "월 임대료",
      name: "cost",
      placeholder: "임대료를 입력해주세요",
      type: "number",
      disabled: false,
      required: true,
    },
    {
      formType: "date-range",
      subTitle: "계약 불가능 기간 설정 ",
      name: "impossibleDate",
      placeholder: "",
      disabled: needImpossibleDate ? false : true,
      required: true,
    },
  ];
};

const CreatePlacePage = () => {
  const navigate = useNavigate();
  const methods = useForm({ mode: "onChange" });

  const [filterBusinessList, setFilterBusinessList] = useState<string[]>([]);
  const [filterLocationList, setFilterLocationList] = useState<string[]>([]);
  const [placeSectionFromData, setPlaceSectionFromData] = useState<any[]>([]);
  const [needImpossibleDate, setNeedImpossibleDate] = useState<boolean>(true);
  const [imgList, setImgList] = useState<string[]>([]);

  const submitLicenseNum = useCallback(
    async (value: number) => {
      const response = await validateLicenseNumApi(value);
      if (response.status !== 200) {
        methods.resetField("licenseNum", { defaultValue: "" });
      }
      alert(`${response.data.message}`);
    },
    [methods]
  );

  const submitPlaceForm = useCallback(
    async (result: any) => {
      const formData = new FormData();
      formData.append("placeName", result.placeName);
      formData.append("licenseNum", result.licenseNum);
      formData.append("business", filterBusinessList[0]);
      formData.append("location", filterLocationList[0]);
      formData.append("article", result.article);
      formData.append(
        "cost",
        result.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
      formData.append("lease", "");
      formData.append(
        "impossibleDate",
        dayjs(result.impossibleDate.selection.startDate).unix().toString()
      );
      formData.append(
        "impossibleDate",
        dayjs(result.impossibleDate.selection.endDate).unix().toString()
      );
      imgList.map((img) => {
        formData.append("placeImageUrl", img);
      });

      const response = await createPlaceApi(formData);
      navigate(`/place/${response.data.id}`);
    },
    [imgList, methods]
  );

  useEffect(() => {
    setPlaceSectionFromData(makePlaceSectionFromData(needImpossibleDate));
  }, [needImpossibleDate]);

  const saveImage = useCallback(
    (imgStr: string) => {
      if (imgStr) {
        const _imgList = [...imgList];
        _imgList.push(imgStr);
        setImgList(_imgList);
      }
    },
    [imgList]
  );

  return (
    <article className={`flex w-full flex-col gap-10`}>
      <Title title={"공간 정보 등록"}></Title>

      <FormProvider {...methods}>
        <form>
          <div className={`pb-12`}>
            <BookingSection
              title={null}
              data={makeBasicSectionFromData(submitLicenseNum)}
            ></BookingSection>
          </div>

          <div
            className={`flex flex-col gap-[3.75rem] pb-16 basic-border-bottom`}
          >
            <FilteringSection
              type={"business"}
              onClickEvent={(list) => {
                setFilterBusinessList(list);
              }}
              isMultiSelect={false}
            />
            <FilteringSection
              type={"location"}
              onClickEvent={(list) => {
                setFilterLocationList(list);
              }}
              isMultiSelect={false}
            />
          </div>

          <div>
            <div className={`pb-12`}>
              <BookingSection
                title={null}
                data={placeSectionFromData}
              ></BookingSection>
              <div className="px-32 flex gap-4">
                <input
                  type="radio"
                  checked={!needImpossibleDate}
                  onClick={() => setNeedImpossibleDate(!needImpossibleDate)}
                ></input>
                <label className={`text-my-green text-sm`}>
                  계약 불가능 기간 미설정{" "}
                </label>
              </div>
            </div>

            <div className={`flex gap-8`}>
              <div className={`grid grid-cols-2 flex-wrap gap-4`}>
                {[0, 1, 2, 3].map((picIndex) => (
                  <FormInputPhoto
                    key={picIndex}
                    name={`pic${picIndex}`}
                    required={false}
                    saveImageEvent={(str) => saveImage(str)}
                  ></FormInputPhoto>
                ))}
              </div>
              <div className={`flex-grow`}>
                <FormTextArea
                  name={"article"}
                  placeholder={"자신의 공유공간의 정보를 입력해주세요."}
                  disabled={false}
                  required={true}
                  minWidth={"10px"}
                ></FormTextArea>
              </div>
            </div>

            <div className={`flex w-full justify-center pt-10`}>
              <BaisicButton
                content={"공간 등록하기"}
                color={"green"}
                type={"button"}
                onClickEvent={methods.handleSubmit(submitPlaceForm)}
              ></BaisicButton>
            </div>
          </div>
        </form>
      </FormProvider>
    </article>
  );
};

export default CreatePlacePage;
