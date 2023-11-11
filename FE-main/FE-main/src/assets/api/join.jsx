import { basicAPI } from "./core";

export const getIsDuplicatedApi = async (id) => {
  let url = `/users/check-username/${id}/`;
  const data = await basicAPI.get(url).then((response) => {
    return response.data;
  });
  return data;
};

export const postJoinCEOApi = async (
  username,
  password1,
  password2,
  realname,
  phone
) => {
  let url = `/users/register/true/`;
  const joinCEO = {
    username,
    password1,
    password2,
    realname,
    phone,
  };
  const data = await basicAPI.post(url, joinCEO, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const postJoinUserApi = async (
  username,
  password1,
  password2,
  realname,
  phone
) => {
  let url = `/users/register/false/`;
  const joinUser = {
    username,
    password1,
    password2,
    realname,
    phone,
  };
  const data = await basicAPI.post(url, joinUser, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};
