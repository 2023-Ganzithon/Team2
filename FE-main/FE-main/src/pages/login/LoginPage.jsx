import React, { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import LoginButton from "../../components/button/LoginButton";
import LoginInput from "../../components/form/LoginInput";
import axios from "axios";
import { postIsCorrectLoginApi } from "../../assets/api/login";
import {
  saveAccessTokenToLocalStorage,
  saveRefreshTokenToLocalStorage,
} from "../../assets/api/token";
import { saveUserInfoToLocalStorage } from "../../assets/api/userInfo";
import Divider from "../../components/Divider";

export default function LoginPage() {
  const [login, setLogin] = useState({
    id: "",
    password: "",
  });

  const { handleIsLoggedIn } = useOutletContext();

  const navigate = useNavigate();

  const [isCorrectLogin, setIsCorrectLogin] = useState(false);
  const [isTouchedLogin, setIsTouchedLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);

  useEffect(() => {
    if (login.id.length > 0 && login.password.length > 0)
      setIsTouchedLogin(true);
    else if (login.id.length === 0 || login.password.length === 0) {
      setIsTouchedLogin(false);
    }
  }, [login]);

  const handleLogin = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  const handleLoginSubmit = (event) => {
    if (isTouchedLogin === false) {
      setErrorMessage(["아이디와 패스워드를 입력해주세요."]);
    }
    event.preventDefault();
    postIsCorrectLoginApi(login.id, login.password)
      .then((response) => {
        // 성공적으로 응답을 받았을 때 실행되는 부분
        const { access, refresh, user } = response.data;
        saveUserInfoToLocalStorage(user);
        saveAccessTokenToLocalStorage(access);
        saveRefreshTokenToLocalStorage(refresh);
        handleIsLoggedIn();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        if (isTouchedLogin === false) {
          setErrorMessage(["아이디와 패스워드를 입력해주세요."]);
        }
        if (isTouchedLogin === true) {
          setIsCorrectLogin(false);
          setErrorMessage([
            "아이디 또는 비밀번호를 잘못 입력했습니다.",
            "입력하신 정보를 다시 확인해주세요.",
          ]);
        }
      });
  };
  return (
    <section className="flex flex-col items-center min-h-[65vh]">
      <div className="py-10">
        <h1 className="font-extrabold text-4xl">로그인</h1>
      </div>
      <Divider />
      <form
        className="w-[400px] flex flex-col gap-5 py-8"
        onSubmit={handleLoginSubmit}
      >
        <LoginInput
          type={"text"}
          id={"id"}
          label={"아이디"}
          placeholder={"아이디를 입력해주세요."}
          value={login.id}
          onChange={handleLogin}
        />
        <LoginInput
          type={"password"}
          id={"password"}
          label={"비밀번호"}
          placeholder={"비밀번호를 입력해주세요."}
          value={login.password}
          onChange={handleLogin}
          errorMessage={errorMessage}
        />
        <div className="mt-10 w-[100%] flex justify-end">
          <LoginButton
            color="blue"
            type="submit"
            content="로그인"
            size="w-[75%]"
          />
        </div>
      </form>
      <Divider />
      <div className="py-10 flex text-my-green">
        <span>바로 여기의 회원이 아니신가요?</span>
        <h1 className="ml-6 underline">
          <Link to="/join">회원가입</Link>
        </h1>
      </div>
    </section>
  );
}
