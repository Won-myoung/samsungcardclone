import "./css/mainpage.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export default function Mainpage() {
  // swiper pause/play
  const swiperRef = useRef(null);
  const handlePlay = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };
  const handlePause = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  //login 버튼4개
  const [currentTab, setCurrentTab] = useState("loginTap01"); // 초기 상태는 'DoingSub01'

  const handleButtonClick = (tab) => {
    setCurrentTab(tab); // 버튼을 누를 때마다 currentTab 상태 업데이트
  };

  return (
    <div className="Mainpage">
      <div className="mainpageSwiperWrapper">
        <Swiper
          ref={swiperRef}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="mainSwiperList">
              <div className="textWrap">
                <p class="big">
                  월 최대&nbsp;3만원 할인!
                  <br />
                  모니모카드&nbsp;혜택
                </p>
                <p class="small">
                  편의점,&nbsp;온라인쇼핑몰 등<br />
                  필요한 혜택만 모두&nbsp;모았어요!
                </p>
              </div>
              <img src="/mainSwiper01.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mainSwiperList">
              <div className="textWrap">
                <p class="big">
                  월 최대&nbsp;3만원 할인!
                  <br />
                  모니모카드&nbsp;혜택
                </p>
                <p class="small">
                  편의점,&nbsp;온라인쇼핑몰 등<br />
                  필요한 혜택만 모두&nbsp;모았어요!
                </p>
              </div>
              <img src="/mainSwiper02.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mainSwiperList">
              <div className="textWrap">
                <p class="big">
                  월 최대&nbsp;3만원 할인!
                  <br />
                  모니모카드&nbsp;혜택
                </p>
                <p class="small">
                  편의점,&nbsp;온라인쇼핑몰 등<br />
                  필요한 혜택만 모두&nbsp;모았어요!
                </p>
              </div>
              <img src="/mainSwiper03.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mainSwiperList">
              <div className="textWrap">
                <p class="big">
                  월 최대&nbsp;3만원 할인!
                  <br />
                  모니모카드&nbsp;혜택
                </p>
                <p class="small">
                  편의점,&nbsp;온라인쇼핑몰 등<br />
                  필요한 혜택만 모두&nbsp;모았어요!
                </p>
              </div>
              <img src="/mainSwiper04.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mainSwiperList">
              <div className="textWrap">
                <p class="big">
                  월 최대&nbsp;3만원 할인!
                  <br />
                  모니모카드&nbsp;혜택
                </p>
                <p class="small">
                  편의점,&nbsp;온라인쇼핑몰 등<br />
                  필요한 혜택만 모두&nbsp;모았어요!
                </p>
              </div>
              <img src="/mainSwiper05.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mainSwiperList">
              <div className="textWrap">
                <p class="big">
                  월 최대&nbsp;3만원 할인!
                  <br />
                  모니모카드&nbsp;혜택
                </p>
                <p class="small">
                  편의점,&nbsp;온라인쇼핑몰 등<br />
                  필요한 혜택만 모두&nbsp;모았어요!
                </p>
              </div>
              <img src="/mainSwiper06.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mainSwiperList">
              <div className="textWrap">
                <p class="big">
                  월 최대&nbsp;3만원 할인!
                  <br />
                  모니모카드&nbsp;혜택
                </p>
                <p class="small">
                  편의점,&nbsp;온라인쇼핑몰 등<br />
                  필요한 혜택만 모두&nbsp;모았어요!
                </p>
              </div>
              <img src="/mainSwiper07.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mainSwiperList">
              <div className="textWrap">
                <p class="big">
                  월 최대&nbsp;3만원 할인!
                  <br />
                  모니모카드&nbsp;혜택
                </p>
                <p class="small">
                  편의점,&nbsp;온라인쇼핑몰 등<br />
                  필요한 혜택만 모두&nbsp;모았어요!
                </p>
              </div>
              <img src="/mainSwiper08.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mainSwiperList">
              <div className="textWrap">
                <p class="big">
                  월 최대&nbsp;3만원 할인!
                  <br />
                  모니모카드&nbsp;혜택
                </p>
                <p class="small">
                  편의점,&nbsp;온라인쇼핑몰 등<br />
                  필요한 혜택만 모두&nbsp;모았어요!
                </p>
              </div>
              <img src="/mainSwiper09.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mainSwiperList">
              <div className="textWrap">
                <p class="big">
                  월 최대&nbsp;3만원 할인!
                  <br />
                  모니모카드&nbsp;혜택
                </p>
                <p class="small">
                  편의점,&nbsp;온라인쇼핑몰 등<br />
                  필요한 혜택만 모두&nbsp;모았어요!
                </p>
              </div>
              <img src="/mainSwiper10.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mainSwiperList">
              <div className="textWrap">
                <p class="big">
                  월 최대&nbsp;3만원 할인!
                  <br />
                  모니모카드&nbsp;혜택
                </p>
                <p class="small">
                  편의점,&nbsp;온라인쇼핑몰 등<br />
                  필요한 혜택만 모두&nbsp;모았어요!
                </p>
              </div>
              <img src="/mainSwiper11.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mainSwiperList">
              <div className="textWrap">
                <p class="big">
                  월 최대&nbsp;3만원 할인!
                  <br />
                  모니모카드&nbsp;혜택
                </p>
                <p class="small">
                  편의점,&nbsp;온라인쇼핑몰 등<br />
                  필요한 혜택만 모두&nbsp;모았어요!
                </p>
              </div>
              <img src="/mainSwiper12.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mainSwiperList">
              <div className="textWrap">
                <p class="big">
                  월 최대&nbsp;3만원 할인!
                  <br />
                  모니모카드&nbsp;혜택
                </p>
                <p class="small">
                  편의점,&nbsp;온라인쇼핑몰 등<br />
                  필요한 혜택만 모두&nbsp;모았어요!
                </p>
              </div>
              <img src="/mainSwiper13.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mainSwiperList">
              <div className="textWrap">
                <p class="big">
                  월 최대&nbsp;3만원 할인!
                  <br />
                  모니모카드&nbsp;혜택
                </p>
                <p class="small">
                  편의점,&nbsp;온라인쇼핑몰 등<br />
                  필요한 혜택만 모두&nbsp;모았어요!
                </p>
              </div>
              <img src="/mainSwiper14.png" alt="" />
            </div>
          </SwiperSlide>
          <button onClick={handlePlay}>Play</button>
          <button onClick={handlePause}>Pause</button>
        </Swiper>
      </div>
      <div className="mainpageLogin">
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
              <img src="loginBtnAppImg01.png" alt="" />
              <p>
                삼성카드 앱의 <br />
                결제 비밀번호로 로그인 해주세요.
              </p>
            </div>
          )}
          {currentTab === "loginTap02" && (
            <div className="loginTopItem">
              <img src="loginBtnAppImg01.png" alt="" />
              <p>
                삼성카드 앱의2 <br />
                결제 비밀번호로 로그인 해주세요.
              </p>
            </div>
          )}
          {currentTab === "loginTap03" && (
            <div className="loginTopItem">
              <img src="loginBtnAppImg03.png" alt="" />
              <p>금융인증서로 로그인 해주세요.</p>
            </div>
          )}
          {currentTab === "loginTap04" && (
            <div className="loginTopItem">
              <img src="loginBtnAppImg04.png" alt="" />
              <p>공동인증서로 로그인 해주세요.</p>
            </div>
          )}
        </div>
        <Link to="#" className="loginBtn">
          로그인
        </Link>
        <div className="loginInfo">
          <Link to="#">삼성카드 앱 안내</Link>
          <Link to="#">회원가입</Link>
        </div>
        <ul className="loginBottomBtn">
          <li>
            <img src="loginBtnImg01.png" alt="" />
            <Link to="#">명세서</Link>
          </li>
          <li>
            <img src="loginBtnImg02.png" alt="" />
            <Link to="#">이용내역</Link>
          </li>
          <li>
            <img src="loginBtnImg03.png" alt="" />
            <Link to="#">즉시결제</Link>
          </li>
          <li>
            <img src="loginBtnImg04.png" alt="" />
            <Link to="#">분할납부</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
