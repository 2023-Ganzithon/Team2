import { basicAPI } from "./core";
import { getAccessTokenFromLocalStorage } from "./token";

const token = getAccessTokenFromLocalStorage();

export const getPlaceListApi = async (business: string, location: string) => {
  let url = `/places/${business}/${location}/`;

  const data = await basicAPI.get(url).then((response) => {
    return response.data;
  });
  return data;
};

export const getPlaceApi = async (placeId: number) => {
  let url = `/places/${placeId}/`;

  const data = await basicAPI.get(url).then((response) => {
    return response.data;
  });
  return data;
};

export const validateLicenseNumApi = async (licenseNum: number) => {
  let url = `/users/checklicense/${licenseNum}/`;

  const data = await basicAPI
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((response) => {
      return response;
    });
  return data;
};

export const createPlaceApi = async (reqBody: any) => {
  let url = `places/create/`;
  const config = {
    headers: {
      Authorization: token, // 토큰 넣어주기
      "Content-Type": "multipart/form-data", // 데이터 형식 지정
    },
  };

  const data = await basicAPI
    .post(url, reqBody, config)
    .then((response) => {
      return response;
    })
    .catch((response) => {
      return response;
    });
  return data;
};
