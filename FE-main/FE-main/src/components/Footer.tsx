import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="footer px-[10%]"
      style={{ height: "var(--height-footer)" }}
    >
      <div className="relative">
        <div className="text-white">
          <h1 className="mt-10 font-light text-2xl">TEAM_GANZI YONG</h1>
          <p className="mt-8">
            <span>back-end</span>
            <span className="ml-16 font-light">구혜승 이주형</span>
          </p>
          <p className="mt-6">
            <span>front-end</span>
            <span className="ml-16 font-light">임예람 한명수</span>
          </p>
          <p className="mt-6">
            <span>plan / design</span>
            <span className="ml-16 font-light">방혜진</span>
          </p>
          <p className="mt-7">
            <span>e-mail</span>
            <span className="ml-16 font-thin">bhj010203@naver.com </span>
          </p>
        </div>
        <div className="absolute bottom-[-20px] right-[-20px] text-white">
          <Link className="mr-6 underline" to="#">
            개인정보처리방침
          </Link>
          <Link className="underline" to="#">
            이용약관
          </Link>
        </div>
      </div>
    </footer>
  );
}
