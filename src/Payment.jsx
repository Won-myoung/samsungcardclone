import { Link } from "react-router-dom";
import "./css/payment.css";
import "./css/showall.css";
import { useEffect, useRef, useState } from "react";
// import ShowAll from "./ShowAll.jsx";
import ShowAll01 from "./showAllList/ShowAll01";
import ShowAll02 from "./showAllList/ShowAll02";
import ShowAll03 from "./showAllList/ShowAll03";
import ShowAll04 from "./showAllList/ShowAll04";
import ShowAll05 from "./showAllList/ShowAll05";
import ShowAll06 from "./showAllList/ShowAll06";
import ShowAll07 from "./showAllList/ShowAll07";
import ShowAll08 from "./showAllList/ShowAll08";

export default function Payment() {
  const [currentTab, setCurrentTab] = useState("scrollTap01");
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isContentVisible02, setIsContentVisible02] = useState(false);

  const handleScroll = (sectionClass) => {
    const section = document.querySelector(`.${sectionClass}`);
    const headerHeight = 188; // 헤더의 높이

    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  };

  const handleButtonClick = (tab, sectionClass) => {
    setCurrentTab(tab);
    handleScroll(sectionClass);
  };
  //1회성 버튼과 컨텐츠 나타나게하기
  const handleShowContent = () => {
    setIsContentVisible(true);
  };
  const handleShowContent02 = () => {
    setIsContentVisible02(true);
  };

  //이하 모달창생성소스
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const dragRef = useRef({ isDragging: false, x: 0, y: 0 });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      const modal = modalRef.current;
      modal.style.left = `${window.scrollX + window.innerWidth / 2 - modal.offsetWidth / 2}px`;
      modal.style.top = `${window.scrollY + window.innerHeight / 2 - modal.offsetHeight / 2}px`;
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  /*   const onMouseDown = (e) => {
    dragRef.current.isDragging = true;
    dragRef.current.x = e.clientX - modalRef.current.offsetLeft;
    dragRef.current.y = e.clientY - modalRef.current.offsetTop;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e) => {
    if (!dragRef.current.isDragging) return;
    modalRef.current.style.left = `${e.clientX - dragRef.current.x}px`;
    modalRef.current.style.top = `${e.clientY - dragRef.current.y}px`;
  };

  const onMouseUp = () => {
    dragRef.current.isDragging = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }; */

  /* 모달창 버튼 */
  const [currentTab02, setCurrentTab02] = useState("showAll01");
  const handleButtonClick02 = (tab) => {
    setCurrentTab02(tab);
  };
  return (
    <div className="payment">
      <div className="paymentCover">
        <div>
          <h2>삼성카드 회원님,</h2>
          <h2>
            <strong>정기결제 지금 신청하고</strong> <br />
            편리함만 누리세요~
          </h2>
          <Link to="#">자세히보기</Link>
        </div>
      </div>
      <Link to="#" className="paymentBanner">
        <p>통신료 최대 12만원 캐시백 받는 요금제!</p>
      </Link>
      <div className="paymentStickyWrap">
        <div className="button-container">
          <button onClick={() => handleButtonClick("scrollTap01", "section1")} className={`scroll-button ${currentTab === "scrollTap01" ? "active" : ""}`}>
            인기
          </button>
          <button onClick={() => handleButtonClick("scrollTap02", "section2")} className={`scroll-button ${currentTab === "scrollTap02" ? "active" : ""}`}>
            납부
          </button>
          <button onClick={() => handleButtonClick("scrollTap03", "section3")} className={`scroll-button ${currentTab === "scrollTap03" ? "active" : ""}`}>
            구독
          </button>
          <button onClick={() => handleButtonClick("scrollTap04", "section4")} className={`scroll-button ${currentTab === "scrollTap04" ? "active" : ""}`}>
            알림
          </button>
          <button onClick={() => handleButtonClick("scrollTap05", "section5")} className={`scroll-button ${currentTab === "scrollTap05" ? "active" : ""}`}>
            보험
          </button>
          <button onClick={() => handleButtonClick("scrollTap06", "section6")} className={`scroll-button ${currentTab === "scrollTap06" ? "active" : ""}`}>
            약정
          </button>
        </div>
        <div className="paymentScroll-container">
          <div className="content">
            <div className="section section1 ">
              <h3>
                삼성카드 회원님이 <strong>가장 많이 신청한 서비스</strong>
              </h3>
              <ul>
                <li>
                  <Link>
                    <strong>추천</strong> 아파트관리비
                  </Link>
                </li>
                <li>
                  <Link>
                    <strong>추천</strong> 전화요금
                  </Link>
                </li>
                <li>
                  <Link>4대 사회보험</Link>
                </li>
                <li>
                  <Link>도시가스요금</Link>
                </li>
                <li>
                  <Link>전기요금</Link>
                </li>
                <li>
                  <Link>
                    <strong>추천</strong>My 큐커 플랜
                  </Link>
                </li>
                <li>
                  <Link>
                    <strong>추천</strong>결제카드를 분실하면?
                  </Link>
                </li>
                <li>
                  <Link>대학등록금</Link>
                </li>
                <li>
                  <Link>보험 </Link>
                </li>
              </ul>
            </div>
            <div className="section section2">
              <div className="section2Header">
                <h3>납부</h3>
                <Link to="#">한번에 가입하기</Link>
              </div>
              <ul className="section2Body">
                <li>
                  <Link to="#">
                    <img src="/payment/ico_mrc_grp_2.png" alt="" />
                    <h4>아파트 관리비</h4>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="/payment/ico_mrc_grp_4.png" alt="" />
                    <h4>전화요금</h4>
                    <p>휴대전화, 유선전화</p>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="/payment/ico_mrc_grp_1.png" alt="" />
                    <h4>도시가스요금</h4>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="/payment/ico_mrc_grp_5.png" alt="" />
                    <h4>4대 사회보험</h4>
                    <p>국민연금, 건강보험, 고용보험, 산재보험</p>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="/payment/ico_mrc_grp_3.png" alt="" />
                    <h4>전기요금</h4>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="/payment/ico_mrc_grp_91.png" alt="" />
                    <h4>유치원 납입금</h4>
                  </Link>
                </li>
                {!isContentVisible && (
                  <button onClick={handleShowContent} className="show-content-button">
                    <span>4개</span> 서비스 더 보기
                  </button>
                )}
                {isContentVisible && (
                  <ul className="hidden-content">
                    <li>
                      <Link to="#">
                        <img src="/payment/ico_mrc_grp_7.png" alt="" />
                        <h4>초중고 학교납입금</h4>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src="/payment/ico_mrc_grp_8.png" alt="" />
                        <h4>지방세입 모바일 고지서</h4>
                        <p>고지서 알림받고 세액 공제까지</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src="/payment/ico_mrc_grp_6.png" alt="" />
                        <h4>국세/지방세</h4>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src="/payment/ico_mrc_grp_10.png" alt="" />
                        <h4>대학등록금</h4>
                      </Link>
                    </li>
                  </ul>
                )}
              </ul>
              <Link to="#" className="sectionBottomLink">
                아파트 관리비 2.5% 할인! 삼성iD ALL 카드
              </Link>
            </div>
            <div className="section section3">
              <div className="section3Header">
                <h3>구독</h3>
              </div>
              <ul className="section3Body">
                <li>
                  <Link to="#">
                    <img src="/payment/ico_mrc_grp_25.png" alt="" />
                    <h4>넷플릭스</h4>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="/payment/ico_mrc_grp_31.png" alt="" />
                    <div>
                      <h4>유튜브 프리미엄</h4>
                      <p>광고 없는 YouTube</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="/payment/ico_mrc_grp_36.png" alt="" />
                    <h4>마켓컬리 컬리패스</h4>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="/payment/ico_mrc_grp_56.png" alt="" />
                    <h4>티빙</h4>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="/payment/ico_mrc_grp_26.png" alt="" />
                    <h4>티빙</h4>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="/payment/ico_mrc_grp_29.png" alt="" />
                    <h4>웨이브</h4>
                  </Link>
                </li>
              </ul>
              {/* 모달시작 */}
              <div className="modalWrapper">
                <button onClick={openModal} className="show-content-button">
                  전체보기
                </button>
                {isModalOpen && (
                  <div
                    className="modal"
                    ref={modalRef}
                    // style={{
                    //   overflow: "hidden",
                    //   transform: "none",
                    // }}
                  >
                    <div className="modalwrap">
                      <div className="modal-header" /* onMouseDown={onMouseDown} */>
                        <div className="header-title">
                          <span>
                            <strong>구독</strong> 전체보기
                          </span>
                          <button onClick={closeModal} className="close-button">
                            <img src="/payment/closeBtn.png" alt="close" />
                          </button>
                        </div>
                        <div>
                          <div className="showAllButton">
                            <button onClick={() => handleButtonClick02("showAll01")} className={currentTab02 === "showAll01" ? "active" : ""}>
                              All
                            </button>
                            <button onClick={() => handleButtonClick02("showAll02")} className={currentTab02 === "showAll02" ? "active" : ""}>
                              VOD/음원
                            </button>
                            <button onClick={() => handleButtonClick02("showAll03")} className={currentTab02 === "showAll03" ? "active" : ""}>
                              정기배송
                            </button>
                            <button onClick={() => handleButtonClick02("showAll04")} className={currentTab02 === "showAll04" ? "active" : ""}>
                              렌탈
                            </button>
                            <button onClick={() => handleButtonClick02("showAll05")} className={currentTab02 === "showAll05" ? "active" : ""}>
                              교육/학습지
                            </button>
                            <button onClick={() => handleButtonClick02("showAll06")} className={currentTab02 === "showAll06" ? "active" : ""}>
                              문화/컬처
                            </button>
                            <button onClick={() => handleButtonClick02("showAll07")} className={currentTab02 === "showAll07" ? "active" : ""}>
                              케어/멤버십
                            </button>
                            <button onClick={() => handleButtonClick02("showAll08")} className={currentTab02 === "showAll08" ? "active" : ""}>
                              식음료
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="modal-content">
                        <div className="showAll">
                          <div className="showAllBody">
                            {currentTab02 === "showAll01" && <ShowAll01 />}
                            {currentTab02 === "showAll02" && <ShowAll02 />}
                            {currentTab02 === "showAll03" && <ShowAll03 />}
                            {currentTab02 === "showAll04" && <ShowAll04 />}
                            {currentTab02 === "showAll05" && <ShowAll05 />}
                            {currentTab02 === "showAll06" && <ShowAll06 />}
                            {currentTab02 === "showAll07" && <ShowAll07 />}
                            {currentTab02 === "showAll08" && <ShowAll08 />}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* 모달완료 */}
              <Link to="#" className="sectionBottomLink">
                스트리밍 10%할인 삼성iD ON카드
              </Link>
            </div>
            <div className="section section4">
              <div className="section4Header">
                <h3>알림</h3>
              </div>
              <ul className="section4Body">
                <li>
                  <Link to="#">
                    <img src="/payment/ico_mrc_grp_52.png" alt="" />
                    <div>
                      <h4>금융안심보상</h4>
                      <p>신용등급 확인, 금융사기 피해 보상</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="/payment/ico_mrc_grp_51.png" alt="" />
                    <div>
                      <h4>명의보호알림</h4>
                      <p>본인/실명 인증 발생 시 실시간 알림</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="/payment/ico_mrc_grp_49.png" alt="" />
                    <div>
                      <h4>휴대폰알림</h4>
                      <p>결제내역과 잔여한도, 신용변동 알림</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="/payment/ico_mrc_grp_50.png" alt="" />
                    <div>
                      <h4>바로알림</h4>
                      <p>카드 쓸 때마다 결제내역 바로 알림</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="/payment/ico_mrc_grp_54.png" alt="" />
                    <div>
                      <h4>종합정보 보호상품</h4>
                      <p>금융 사기 및 명의 도용 피해 예방</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="/payment/ico_mrc_grp_53.png" alt="" />
                    <div>
                      <h4>명의도용차단 서비스</h4>
                      <p>실명 확인 즉시 알림</p>
                    </div>
                  </Link>
                </li>
                {!isContentVisible02 && (
                  <button onClick={handleShowContent02} className="show-content-button">
                    <span>2개</span> 서비스 더 보기
                  </button>
                )}
                {isContentVisible02 && (
                  <ul className="section2Hidden-content">
                    <li>
                      <Link to="#">
                        <img src="/payment/ico_mrc_grp_55.png" alt="" />
                        <div>
                          <h4>세이프케어상품</h4>
                          <p>위급 상황 시 골든타임 확보 가능</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src="/payment/ico_mrc_grp_80.png" alt="" />
                        <div>
                          <h4>채무면제/유예상품</h4>
                          <p>카드 대금 면제 또는 결제 연기</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                )}
              </ul>

              <Link to="#" className="sectionBottomLink">
                기분 좋은 쇼핑 혜택, 삼성 iD ALL 카드
              </Link>
            </div>
            <div className="section section5">
              <div className="section5Header">
                <h3>보험</h3>
              </div>
              <ul className="section5Body">
                <li>
                  <Link to="#">
                    <img src="/payment/ico_mrc_grp_00.png" alt="" />
                    <h4>라이나생명</h4>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="/payment/ico_mrc_grp_62.png" alt="" />
                    <div>
                      <h4>AIA생명</h4>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="/payment/ico_mrc_grp_70.png" alt="" />
                    <h4>삼성화재</h4>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="/payment/ico_mrc_grp_71.png" alt="" />
                    <h4>DB손해보험</h4>
                  </Link>
                </li>
              </ul>
              <div>
                <button className="show-content-button">전체보기</button>
              </div>
              <Link to="#" className="sectionBottomLink">
                내게맞춘혜택, 삼성iD ON카드
              </Link>
            </div>
            <div className="section section6">
              <div className="section6Header">
                <h3>약정</h3>
              </div>
              <ul className="section6Body">
                <li>
                  <Link to="#">
                    <img src="/payment/ico_peripay_109.png" alt="" />
                    <h4>간편식 정기쇼핑(BESPOKE 큐커)</h4>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
