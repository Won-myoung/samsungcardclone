import { Link } from "react-router-dom";
import "./css/header.css";
import HideMenu from "./HideMenu";
import { useState } from "react";
import "./css/hidemenu.css";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonImage, setButtonImage] = useState("/hamburger.png");

  const toggleModal = () => {
    const newIsModalOpen = !isModalOpen;
    setIsModalOpen(newIsModalOpen);
    setButtonImage(newIsModalOpen ? "/hamburgerx.png" : "/hamburger.png");
  };

  const toggleHideMenu = () => {
    setIsModalOpen(false); // HideMenu가 닫힐 때 모달도 함께 닫히도록 수정
    setButtonImage("/hamburger.png");
  };
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
          {!isModalOpen && ( // isModalOpen이 false일 때만 topMenuCenter를 렌더링

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
          </ul>)}
          <div className="topMenuIcons">
            <div>
              <Link to="#" className="topMenuSearch">
                돋보기
              </Link>
            </div>
            <div className="HMModalWrapper">
              <button onClick={toggleModal} className="HMMhow-content-button">
                <img src={buttonImage} alt="menu" />
              </button>
              {isModalOpen && (
                <div className="HMModal">
                  <div className="HMModalwrap">
                    <div className="HMModal-header">
                      {/* <button onClick={toggleModal} className="close-button">
                        <img src="/payment/closeBtn.png" alt="close" />
                      </button> */}
                    </div>
                    <HideMenu onClose={toggleHideMenu} /> {/* onClose prop 전달 */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
