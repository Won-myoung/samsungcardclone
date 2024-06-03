import { Link } from "react-router-dom";
import "./css/header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="miniMenuWrapper">
          <ul className="miniMenuLink">
            <li>
              <Link to="#">개인사업자</Link>
            </li>
            <li>
              <Link to="#">법인</Link>
            </li>
            <li>
              <Link to="#">가맹점</Link>
            </li>
            <li>
              <Link to="#">금용소비자보호</Link>
            </li>
            <li>
              <Link to="#">상품공시실</Link>
            </li>
          </ul>
          <ul className="miniMenuLogin">
            <li>
              <Link to="#">로그인</Link>
            </li>
            <li>
              <Link to="#">회원가입</Link>
            </li>
          </ul>
        </div>
        <div className="topMenuWrapper">
          <div className="topMenuLogo">
            <Link to="/">
              <img src="/samsunglogo.png" alt="" />
            </Link>
          </div>
          <ul className="topMenuCenter">
            <li>
              <Link to="/My">마이</Link>
            </li>
            <li>
              <Link to="/Benefit">혜택</Link>
            </li>
            <li>
              <Link to="/Guide">카드안내/신청</Link>
            </li>
            <li>
              <Link to="/Finance">금융</Link>
            </li>
            <li>
              <Link to="/Payment">정기결제</Link>
            </li>
          </ul>
          <div className="topMenuIcons">
            <div>
              <Link to="#" className="topMenuSearch">
                돋보기
              </Link>
            </div>
            <div>
              <Link to="#" className="topMenuBurger">
                햄버거메뉴
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
