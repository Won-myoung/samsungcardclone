import "./css/mainpage.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
  const [currentTab, setCurrentTab] = useState("loginTap01"); // 초기 상태
  const handleButtonClick = (tab) => {
    setCurrentTab(tab); // 버튼을 누를 때마다 currentTab 상태 업데이트
  };

  const [currentTabCard, setCurrentTabCard] = useState("cardTap01");
  const handleCardButtonClick = (tab) => {
    setCurrentTabCard(tab);
  };

  return (
    <div className="Mainpage">
      <div className="mainCover">
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
              <div className="loginTopItem loginTapWrap">
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
            <Link to="#" className="loginBtn">
              로그인
            </Link>
            <div className="loginInfo">
              <Link to="#">삼성카드 앱 안내</Link>
              <Link to="#">회원가입</Link>
            </div>
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
      <div className="mainCardWrap">
        <div className="mainCardlist">
          <button
            onClick={() => handleCardButtonClick("cardTap01")}
            className={currentTabCard === "cardTap01" ? "active" : ""}
          >
            개인카드
          </button>
          <button
            onClick={() => handleCardButtonClick("cardTap02")}
            className={currentTabCard === "cardTap02" ? "active" : ""}
          >
            법인카드
          </button>
          <Link to="#">카드 전체보기</Link>
          <Link to="#">내게 맞는 카드 찾기</Link>
          <Link to="#">친구에게 카드추천</Link>
        </div>
        {currentTabCard === "cardTap01" && (
          <div className="cardTap01">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                  slidesPerGroup: 3,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                  slidesPerGroup: 4,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                  slidesPerGroup: 5,
                },
                loop: true,
                loopFillGroupWithBlank: true,
              }}
              navigation={true}
              modules={[/* Pagination, */ Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard01.gif" alt="" />
                  </div>
                  <strong>모니카 카드1</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard02.gif" alt="" />
                  </div>
                  <strong>모니카 카드</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard03.gif" alt="" />
                  </div>
                  <strong>모니카 카드</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard04.gif" alt="" />
                  </div>
                  <strong>모니카 카드</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard05.gif" alt="" />
                  </div>
                  <strong>모니카 카드</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard06.gif" alt="" />
                  </div>
                  <strong>모니카 카드</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard07.gif" alt="" />
                  </div>
                  <strong>모니카 카드</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard08.gif" alt="" />
                  </div>
                  <strong>모니카 카드</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard09.gif" alt="" />
                  </div>
                  <strong>모니카 카드</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard10.gif" alt="" />
                  </div>
                  <strong>모니카 카드</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard11.gif" alt="" />
                  </div>
                  <strong>모니카 카드</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard12.gif" alt="" />
                  </div>
                  <strong>모니카 카드</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        )}
        {currentTabCard === "cardTap02" && (
          <div className="cardTap02">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                  slidesPerGroup: 3,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                  slidesPerGroup: 4,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                  slidesPerGroup: 5,
                },
                loop: true,
                loopFillGroupWithBlank: true,
              }}
              navigation={true}
              modules={[/* Pagination, */ Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard05.gif" alt="" />
                  </div>
                  <strong>모니카 카드2</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard06.gif" alt="" />
                  </div>
                  <strong>모니카 카드</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard07.gif" alt="" />
                  </div>
                  <strong>모니카 카드</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard08.gif" alt="" />
                  </div>
                  <strong>모니카 카드</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard09.gif" alt="" />
                  </div>
                  <strong>모니카 카드</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard10.gif" alt="" />
                  </div>
                  <strong>모니카 카드</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard11.gif" alt="" />
                  </div>
                  <strong>모니카 카드</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard12.gif" alt="" />
                  </div>
                  <strong>모니카 카드</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard01.gif" alt="" />
                  </div>
                  <strong>모니카 카드</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard02.gif" alt="" />
                  </div>
                  <strong>모니카 카드</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard03.gif" alt="" />
                  </div>
                  <strong>모니카 카드</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="">
                  <div className="cardContainer">
                    <img src="./cardgif/motionCard04.gif" alt="" />
                  </div>
                  <strong>모니카 카드</strong>
                  <p>
                    스타벅스 50% <br />
                    스트리밍 30%할인
                  </p>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        )}
      </div>
      <div className="mainFinanceShopping">
        <div className="mainFinanceItem">
          <Link to="#" className="financeTextbox">
            <strong>금융</strong>
            <h3>
              목돈이 필요할 때 상환수수료 없이! <br />
              장기카드대출!
            </h3>
            <p>최대 5,000만원, 최저이율 연 4.9%</p>
          </Link>
          <img src="./calculator.png" alt="" />
        </div>
        <div className="mainShoppingItem">
          <Link to="#" className="shoppingTextbox">
            <strong> 쇼핑</strong>
            <div className="shoppingTextboxFlex">
              <h3>10시 일일특가</h3>
              <span>sold out</span>
            </div>
            <div>
              <p>무료배송</p>
              <p>개 한정</p>
            </div>
            <Link to="#">다음특가</Link>
          </Link>
        </div>
      </div>

      <div className="mainEventsWrap">
        <div className="mainEventSticky">
          <div className="eventWrap">
            <div className="event">
              <img src="./mainevent01.png" alt="" />
              <h4>
                영업용 자동차보험 조회 시 <br />
                스타벅스 아메리카노 2잔
              </h4>
              <p>2024.05.10~2024.05.31</p>
            </div>
            <div className="event">
              <img src="./mainevent02.png" alt="" />{" "}
              <h4>
                영업용 자동차보험 조회 시 <br />
                스타벅스 아메리카노 2잔
              </h4>
              <p>2024.05.10~2024.05.31</p>
            </div>
            <div className="event">
              <img src="./mainevent03.png" alt="" />
              <h4>
                영업용 자동차보험 조회 시 <br />
                스타벅스 아메리카노 2잔
              </h4>
              <p>2024.05.10~2024.05.31</p>
            </div>
          </div>
          <Link to="#">진행중 이벤트 더보기</Link>
        </div>
        <div className="mainEventStatic">
          <div className="eventStaticItem">
            <div className="staticTextbox">
              <span>게임존</span>
              <h4>
                게임도 하고 <br />
                혜택도 받고!
              </h4>
              <p>매일매일 다양한 혜택 받기</p>
            </div>
            <img src="./staticevent01.png" alt="" />
          </div>
          <div className="eventStaticItem">
            <div className="staticTextbox">
              <span>게임존</span>
              <h4>
                게임도 하고 <br />
                혜택도 받고!
              </h4>
              <p>매일매일 다양한 혜택 받기</p>
            </div>
            <img src="./staticevent02.png" alt="" />
          </div>
          <div className="eventStaticItem">
            <div className="staticTextbox">
              <span>게임존</span>
              <h4>
                게임도 하고 <br />
                혜택도 받고!
              </h4>
              <p>매일매일 다양한 혜택 받기</p>
            </div>
            <img src="./staticevent03.png" alt="" />
          </div>
          <div className="eventStaticItem">
            <div className="staticTextbox">
              <span>게임존</span>
              <h4>
                게임도 하고 <br />
                혜택도 받고!
              </h4>
              <p>매일매일 다양한 혜택 받기</p>
            </div>
            <img src="./staticevent04.png" alt="" />
          </div>
        </div>
      </div>
      <div className="mainInfoBottom">
        <div className="info01">
          <h4>공지사항</h4>
          <p>종합소득세 신고용 카드 이용내역서 조회 및...</p>
          <span>24.04.29</span>
        </div>
        <div className="info02">
          <h4>고객센터</h4>
          <div>
            <div>
              <img src="./ascenter01.png" alt="" />
              <p>자주하는 질문</p>
            </div>
            <div>
              <img src="./ascenter02.png" alt="" />
              <p>자주하는 질문</p>
            </div>
            <div>
              <img src="./ascenter03.png" alt="" />
              <p>자주하는 질문</p>
            </div>
          </div>
        </div>
        <div className="info03">
          <div>
            <h4>금융소비자보호포털</h4>
            <p>소비자 보호 정보를 한눈에!</p>
          </div>
          {/* <img src="./lock.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
}
