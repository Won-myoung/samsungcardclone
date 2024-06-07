import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/my.css";
export default function My() {
  //login 버튼4개
  const [currentTab, setCurrentTab] = useState("loginTap01");
  const handleButtonClick = (tab) => {
    setCurrentTab(tab);
  };

  return (
    // <div className="mainpageLogin">
    <div className="myLogin">
      <div className="loginButton">
        <button
          onClick={() => handleButtonClick("loginTap01")}
          className={currentTab === "loginTap01" ? "active" : ""}
        >
          앱카드
        </button>
        <button
          onClick={() => handleButtonClick("loginTap02")}
          className={currentTab === "loginTap02" ? "active" : ""}
        >
          아이디
        </button>
        <button
          onClick={() => handleButtonClick("loginTap03")}
          className={currentTab === "loginTap03" ? "active" : ""}
        >
          금융인증서
        </button>
        <button
          onClick={() => handleButtonClick("loginTap04")}
          className={currentTab === "loginTap04" ? "active" : ""}
        >
          공동인증서
        </button>
      </div>
      <div className="loginApp">
        {currentTab === "loginTap01" && (
          <div className="loginTopItem">
            <div className="loginTopItemVisual">
              <img src="loginBtnAppImg01.png" alt="" />
              <p>
                삼성카드 앱의 <br />
                결제 비밀번호로 로그인 해주세요.
              </p>
            </div>
            <Link to="#" className="loginBtn">
              로그인
            </Link>
            <div className="loginInfo">
              <Link to="#">삼성카드 앱 안내</Link>
              <Link to="#">회원가입</Link>
            </div>
          </div>
        )}
        {currentTab === "loginTap02" && (
          <div className="loginTopItem loginTapWrap">
            <div className="loginTopItemVisual">
              <div className="loginbox">
                <input type="text" placeholder="아이디 6~12자리 입력" />
                <div className="loginCheckbox">
                  <Link to="#">
                    <img src="loginBtnAppImg02-1.png" alt="" />
                    <p>저장</p>
                  </Link>
                </div>
              </div>
              <div className="loginbox">
                <input type="text" placeholder="비밀번호 6~20자리 입력" />
                <div className="loginCheckbox">
                  <Link to="#">
                    <img src="loginBtnAppImg02-2.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <Link to="#" className="loginBtn">
              로그인
            </Link>
            <div className="loginInfo">
              <Link to="#">아이디/비밀번호찾기</Link>
              <Link to="#">회원가입</Link>
            </div>
          </div>
        )}
        {currentTab === "loginTap03" && (
          <div className="loginTopItem">
            <div className="loginTopItemVisual">
              <img src="loginBtnAppImg03.png" alt="" />
              <p>금융인증서로 로그인 해주세요.</p>
            </div>
            <Link to="#" className="loginBtn">
              로그인
            </Link>
            <div className="loginInfo">
              <Link to="#">인증서 등록</Link>
              <Link to="#">회원가입</Link>
            </div>
          </div>
        )}
        {currentTab === "loginTap04" && (
          <div className="loginTopItem">
            <div className="loginTopItemVisual">
              <img src="loginBtnAppImg04.png" alt="" />
              <p>공동인증서로 로그인 해주세요.</p>
            </div>
            <Link to="#" className="loginBtn">
              로그인
            </Link>
            <div className="loginInfo">
              <Link to="#">인증서 등록</Link>
              <Link to="#">회원가입</Link>
            </div>
          </div>
        )}
      </div>
      {/* <hr /> */}
      <div className="safeProgram">
        <p>보안프로그램설정</p>
        <p>보안프로그램설치</p>
      </div>
    </div>
  );
}
