import { basicAPI } from "./core";

export const getUserInfoApi = async (id) => {
  let url = `/users/${id}/`;
  const data = await basicAPI.get(url).then((response) => {
    return response.data;
  });
  return data;
};
