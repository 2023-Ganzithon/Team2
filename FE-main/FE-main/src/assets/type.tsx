export type CategoryType = "business" | "location";
export type CategoryObjectType = { eng: string; kor: string };
export type PlaceInfoType = {
  id: number;
  placeName: string;
  placeImageUrl: string | string[];
  business: string;
  location: string;
  article: string;
  cost: number;
  phone: string;
  impossibleDate_list?: number[];
};
