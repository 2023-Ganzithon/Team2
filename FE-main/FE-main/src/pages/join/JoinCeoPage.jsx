import React, { useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { basicAPI } from "../../assets/api/core";
import { getIsDuplicatedApi, postJoinCEOApi } from "../../assets/api/join";
import {
  saveAccessTokenToLocalStorage,
  saveRefreshTokenToLocalStorage,
} from "../../assets/api/token";
import { saveUserInfoToLocalStorage } from "../../assets/api/userInfo";
import BaisicButton from "../../components/button/BaisicButton";
import LoginButton from "../../components/button/LoginButton";
import Divider from "../../components/Divider";
import LoginInput from "../../components/form/LoginInput";
import { MESSAGE } from "../../constants/message";

export default function JoinCeoPage() {
  const [join, setJoin] = useState({
    id: "",
    password: "",
    password2: "",
    name: "",
    phone: "",
  });

  const handleChangeJoin = (event) => {
    const { name, value } = event.target;
    if (name === "phone" && !Number.isInteger(+value)) {
      return;
    }
    if (name === "phone" && value.length > 11) {
      return;
    }
    setJoin({
      ...join,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const { handleIsLoggedIn } = useOutletContext();

  const [isTouched, setisTouched] = useState({
    id: false,
    password: false,
    phone: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    id: "",
    password: "",
    password2: "",
    name: "",
    phone: "",
  });

  const handleBlurForm = async (event) => {
    const { name } = event.target;
    setisTouched({ ...isTouched, [name]: true });
    if (join[name].trim() === "") {
      setJoin({
        ...join,
        [name]: "",
      });
      setErrorMessage({
        ...errorMessage,
        [name]: MESSAGE[name].EMPTY_ERROR,
      });
    } else if (join[name].length > 0) {
      setErrorMessage({ ...errorMessage, [name]: "" });
      if (name === "id") {
        const { available, message } = await getIsDuplicatedApi(join.id);
        if (available === 1) {
          setErrorMessage({
            ...errorMessage,
            id: MESSAGE.id.AVAILABLE,
          });
        } else if (available === 0) {
          setErrorMessage({
            ...errorMessage,
            id: MESSAGE.id.DUPLICATE_ERROR,
          });
        }
      } else if (name === "password") {
        if (join.password.length < 6) {
          setErrorMessage({
            ...errorMessage,
            [name]: MESSAGE[name].LENGTH_ERROR,
          });
        }
      } else if (name === "password2") {
        if (join[name] === join.password) {
          setErrorMessage({
            ...errorMessage,
            [name]: MESSAGE[name].AVAILABLE,
          });
        } else {
          setErrorMessage({
            ...errorMessage,
            [name]: MESSAGE[name].MISMATCH_ERROR,
          });
        }
      }
    }
  };
  const handleJoinSubmit = (event) => {
    event.preventDefault();

    postJoinCEOApi(
      join.id,
      join.password,
      join.password2,
      join.name,
      join.phone
    )
      .then(async (response) => {
        const { access, refresh } = response.data.token;
        const { user } = response.data;
        console.log("응답 데이터:", response.data);
        saveAccessTokenToLocalStorage(access);
        saveRefreshTokenToLocalStorage(refresh);
        saveUserInfoToLocalStorage(user);
        await handleIsLoggedIn();
        navigate("/");
      })
      .catch((error) => {
        for (const key in join) {
          if (join[key].trim() === "") {
            setErrorMessage((prev) => ({
              ...prev,
              [key]: MESSAGE[key].EMPTY_ERROR,
            }));
          }
        }
      });
  };
  return (
    <section className="flex flex-col items-center min-h-[75vh] ">
      <div className="py-10 text-center">
        <h1 className="font-extrabold text-4xl">회원가입</h1>
      </div>
      <Divider />
      <form
        className="flex flex-col w-[400px] py-10 gap-5"
        onSubmit={handleJoinSubmit}
      >
        <LoginInput
          id={"id"}
          type={"text"}
          label={"아이디"}
          placeholder={"아이디를 입력해주세요."}
          value={join.id}
          onChange={handleChangeJoin}
          onBlur={handleBlurForm}
          errorMessage={errorMessage.id}
        />
        <LoginInput
          id={"password"}
          type={"password"}
          label={"비밀번호"}
          placeholder={"비밀번호를 입력해주세요."}
          value={join.password}
          onChange={handleChangeJoin}
          onBlur={handleBlurForm}
          errorMessage={errorMessage.password}
        />
        <LoginInput
          id={"password2"}
          type={"password"}
          label={"비밀번호 확인"}
          placeholder={"비밀번호를 재입력해주세요."}
          value={join.password2}
          onChange={handleChangeJoin}
          onBlur={handleBlurForm}
          errorMessage={errorMessage.password2}
        />
        <LoginInput
          id={"name"}
          type={"text"}
          label={"이름"}
          placeholder={"이름을 입력해주세요."}
          value={join.name}
          onChange={handleChangeJoin}
          errorMessage={errorMessage.name}
        />
        <LoginInput
          id={"phone"}
          type={"tel"}
          label={"전화번호"}
          placeholder={"전화번호를 입력해주세요."}
          value={join.phone}
          onChange={handleChangeJoin}
          errorMessage={errorMessage.phone}
        />
        <div className="mt-10 flex justify-between">
          <LoginButton
            content={"이전"}
            color={"red"}
            minSize={"min-w-[8rem]"}
            onClickEvent={() => {
              navigate("/join");
            }}
          />
          <LoginButton
            type={"submit"}
            content={"회원가입"}
            color={"blue"}
            size={"w-[60%]"}
          />
        </div>
      </form>
    </section>
  );
}
