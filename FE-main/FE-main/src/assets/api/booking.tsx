import { basicAPI } from "./core";
import { getAccessTokenFromLocalStorage } from "./token";
const token = getAccessTokenFromLocalStorage();

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: token,
  },
};

export const createBookingApi = async (placeId: number, reqBody: any) => {
  let url = `plans/create/${placeId}/`;

  const data = await basicAPI.post(url, reqBody, config).then((response) => {
    return response;
  });
  return data;
};

export const getBookingDetailApi = async (bookingId: number) => {
  let url = `plans/show/${bookingId}/`;

  const data = await basicAPI.get(url, config).then((response) => {
    return response;
  });
  return data;
};
