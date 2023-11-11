import { CategoryObjectType, CategoryType } from "../type";

const businessInfoList: CategoryObjectType[] = [
  { eng: "total", kor: "전체" },
  { eng: "food", kor: "요식업" },
  { eng: "drink", kor: "주점" },
  { eng: "manufacturing", kor: "제조업" },
  { eng: "wholeAndRetail", kor: "도소매" },
];

const locationInfoList: CategoryObjectType[] = [
  { eng: "total", kor: "전체" },
  { eng: "sungSu", kor: "성수" },
  { eng: "hongDae", kor: "홍대" },
  { eng: "gangNam", kor: "강남" },
  { eng: "jongRo", kor: "종로" },
  { eng: "shinChon", kor: "신촌" },
];

export const convertCategoryList = (
  categoryType: CategoryType,
  list: string[],
  lang: "ENG" | "KOR"
): string[] => {
  const _list: string[] = [];
  const basisList: CategoryObjectType[] =
    categoryType === "business" ? businessInfoList : locationInfoList;

  list.map((category) => {
    if (lang === "ENG") {
      const _category = basisList.find(
        (businessObj) => businessObj.kor === category
      );
      if (_category) {
        _list.push(_category.eng);
      }
    } else {
      const _category = basisList.find(
        (businessObj) => businessObj.eng === category
      );
      if (_category) {
        _list.push(_category?.kor);
      }
    }
  });

  return _list;
};
