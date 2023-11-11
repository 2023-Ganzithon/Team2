import { basicAPI } from "./core";

// "username": "mymy",
// "password1": "mypw1234",

export const postIsCorrectLoginApi = async (username, password) => {
  let url = `/dj/login/`;
  const login = {
    username,
    password,
  };
  const data = await basicAPI.post(url, login, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};
