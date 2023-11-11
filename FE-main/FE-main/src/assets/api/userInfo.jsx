export const saveUserInfoToLocalStorage = (userInfo) => {
  const jsonUserInfo = JSON.stringify(userInfo);
  localStorage.setItem("userInfo", jsonUserInfo);
};

export const getUserInfoFromLocalStorage = () => {
  try {
    const jsonString = localStorage.getItem("userInfo");
    return jsonString ? JSON.parse(jsonString) : null;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
};

export const removeUserInfoFromLocalStorage = () => {
  localStorage.removeItem("userInfo");
};
