import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './css/hidemenu.css';

export default function HideMenu({ onClose }) {
  const [activeButton, setActiveButton] = useState('button1');
  const [subMenu, setSubMenu] = useState('subMenu01');
  const [activeMainMenu, setActiveMainMenu] = useState('menu1');
  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth <= 900);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/My') {
      setActiveButton('button1');
      setActiveMainMenu('menu1');
    } else if (path === '/Benefit') {
      setActiveButton('button2');
      setActiveMainMenu('menu2');
    } else if (path === '/Guide') {
      setActiveButton('button3');
      setActiveMainMenu('menu3');
    } else if (path === '/Finance') {
      setActiveButton('button4');
      setActiveMainMenu('menu4');
    } else if (path === '/Payment') {
      setActiveButton('button5');
      setActiveMainMenu('menu5');
    } else if (path === '/Life') {
      setActiveButton('button6');
      setActiveMainMenu('menu6');
    } else if (path === '/AfterService') {
      setActiveButton('button7');
      setActiveMainMenu('menu7');
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsNarrowScreen(window.innerWidth <= 900);
      if (window.innerWidth > 900) {
        setActiveMainMenu(null);
        setSubMenu(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === 'button1') {
      navigate('/My');
    } else if (buttonName === 'button2') {
      navigate('/Benefit');
    } else if (buttonName === 'button3') {
      navigate('/Guide');
    } else if (buttonName === 'button4') {
      navigate('/Finance');
    } else if (buttonName === 'button5') {
      navigate('/Payment');
    } else if (buttonName === 'button6') {
      navigate('/Life');
    } else if (buttonName === 'button7') {
      navigate('/AfterService');
    }
    onClose(); // 메뉴 클릭 후 닫기
  };

  const handleButtonClickSMenu = (tab, menu) => {
    if (activeMainMenu === menu && subMenu === tab) {
      return;
    }

    if (isNarrowScreen) {
      if (activeMainMenu === menu && subMenu === tab) {
        setSubMenu(null);
        setActiveMainMenu(null);
      } else {
        setSubMenu(tab);
        setActiveMainMenu(menu);
      }
    } else {
      setSubMenu(tab);
      setActiveMainMenu(menu);
    }
  };

  return (
    <div className="HMModal-content">
      <div className="menuList">
        <div className="menuListLeft">
          <button className={`button ${activeButton === "button1" ? "active" : ""}`} onMouseEnter={() => handleMouseEnter("button1")} onClick={() => handleButtonClick("button1")}>
            마이
          </button>
          <button className={`button ${activeButton === "button2" ? "active" : ""}`} onMouseEnter={() => handleMouseEnter("button2")} onClick={() => handleButtonClick("button2")}>
            혜택
          </button>
          <button className={`button ${activeButton === "button3" ? "active" : ""}`} onMouseEnter={() => handleMouseEnter("button3")} onClick={() => handleButtonClick("button3")}>
            카드
          </button>
          <button className={`button ${activeButton === "button4" ? "active" : ""}`} onMouseEnter={() => handleMouseEnter("button4")} onClick={() => handleButtonClick("button4")}>
            금융
          </button>
          <button className={`button ${activeButton === "button5" ? "active" : ""}`} onMouseEnter={() => handleMouseEnter("button5")} onClick={() => handleButtonClick("button5")}>
            정기결제
          </button>
          <button className={`button ${activeButton === "button6" ? "active" : ""}`} onMouseEnter={() => handleMouseEnter("button6")} onClick={() => handleButtonClick("button6")}>
            라이프
          </button>
          <button className={`button ${activeButton === "button7" ? "active" : ""}`} onMouseEnter={() => handleMouseEnter("button7")} onClick={() => handleButtonClick("button7")}>
            고객센터
          </button>
        </div>
        <div className="menuListRight" onMouseEnter={() => setActiveButton(activeButton)}>
          <div className={`class1 ${activeButton === "button1" ? "show" : ""}`}>
            <ul>
              <li className={`closeList boldClass ${activeMainMenu === "menu1" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu01", "menu1")}>
                  명세서
                  <img src={activeMainMenu === "menu1" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu1" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu01" && (
                  <ul className="subMenu">
                    <li>
                      <Link to="#">이번달 명세서</Link>
                      <Link to="#">명세서 표기제외</Link>
                      <Link to="#">다음달 결제예정금액</Link>
                      <Link to="#">명세서 재발송</Link>
                      <Link to="#">수령방법</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu1" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu01", "menu1")}>
                  이용내역
                  <img src={activeMainMenu === "menu1" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu1" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu01" && (
                  <ul className="subMenu">
                    <li>
                      <Link to="#">카드이용/취소/매출전표내역</Link>
                      <Link to="#">개인사업자용 이용내역</Link>
                      <Link to="#" className="submenuArrow">
                        단기카드대출/장기카드대출내역
                      </Link>
                      <Link to="#">정기결제이용내역</Link>
                      <Link to="#" className="submenuArrow">
                        장기렌터카/오토리스계약내역
                      </Link>
                      <Link to="#">할부금융 이용내역</Link>
                      <Link to="#">소득공제 내역</Link>
                      <Link to="#">eward 이용내역</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className={`closeList boldClass ${activeMainMenu === "menu2" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu02", "menu2")}>
                  이용한도
                  <img src={activeMainMenu === "menu2" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu2" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu02" && (
                  <ul className="subMenu">
                    <li>
                      <Link to="#">카드이용한도</Link>
                      <Link to="#">목적별 추가한도</Link>
                      <Link to="#">의약품결제 전용한도</Link>
                      <Link to="#">안경원 결제 전용한도</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu2" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu02", "menu2")}>
                  카드대금결제
                  <img src={activeMainMenu === "menu2" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu2" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu02" && (
                  <ul className="subMenu">
                    <li>
                      <Link to="#">즉시결제</Link>
                      <Link to="#">가상계좌</Link>
                      <Link to="#">입금내역</Link>
                      <Link to="#">국내 일시불 분할납부</Link>
                      <Link to="#">해외 일시불 분할납부</Link>
                      <Link to="#" className="submenuArrow">
                        카드대출로 카드대금결제
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu3" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu03", "menu3")}>
                  개인정보
                  <img src={activeMainMenu === "menu3" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu3" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu03" && (
                  <ul className="subMenu">
                    <li>
                      <Link to="#">내 정보 한눈에 보기</Link>
                      <Link to="#">개인정보</Link>
                      <Link to="#">결제일</Link>
                      <Link to="#">결제계좌</Link>
                      <Link to="#">카드/금융이자율</Link>
                      <Link to="#">마케팅 수신동의</Link>
                      <Link to="#">카카오톡 알림톡 수신 동의</Link>
                      <Link to="#">앱 설치정보 수집/이용동의</Link>
                      <Link to="#">홈페이지 비밀번호</Link>
                      <Link to="#">홈페이지 회원탈퇴</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu3" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu03", "menu3")}>
                  카드정보
                  <img src={activeMainMenu === "menu3" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu3" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu03" && (
                  <ul className="subMenu">
                    <li>
                      <Link to="#">카드발급상황</Link>
                      <Link to="#">카드사용등록</Link>
                      <Link to="#">보유카드</Link>
                      <Link to="#">카드비밀번호</Link>
                      <Link to="#">분실신고(삼성카드/타사카드)</Link>
                      <Link to="#">분실해제</Link>
                      <Link to="#">보이스피싱(금융사기) 신고</Link>
                      <Link to="#">카드재발급</Link>
                      <Link to="#">장기 미아용카드 유지</Link>
                      <Link to="#">사고접수</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className={`closeList boldClass ${activeMainMenu === "menu4" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu04", "menu4")}>
                  서류간편발급
                  <img src={activeMainMenu === "menu4" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu4" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu04" && (
                  <ul className="subMenu">
                    <li>
                      <Link to="#">서류발급</Link>
                      <Link to="#">서식 자료실</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>

          <div className={`class2 ${activeButton === "button2" ? "show" : ""}`}>
            <ul>
              <li className={`closeList boldClass ${activeMainMenu === "menu5" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu05", "menu5")}>
                  이벤트
                  <img src={activeMainMenu === "menu5" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu5" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu05" && (
                  <ul className="subMenu">
                    <li>
                      <Link>캔디 모으기</Link>
                      <Link>이벤트</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu5" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu05", "menu5")}>
                  카드 혜택
                  <img src={activeMainMenu === "menu5" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu5" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu05" && (
                  <ul className="subMenu">
                    <li>
                      <Link>나의 카드 혜택</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className={`closeList boldClass ${activeMainMenu === "menu6" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu06", "menu6")}>
                  LINK
                  <img src={activeMainMenu === "menu6" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu6" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu06" && (
                  <ul className="subMenu">
                    <li>
                      <Link>나의 LINK혜택</Link>
                      <Link>월별 LINK혜택 이용내역</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu6" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu06", "menu6")}>
                  포인트
                  <img src={activeMainMenu === "menu6" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu6" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu06" && (
                  <ul className="subMenu">
                    <li>
                      <Link>포인트 조회/사용</Link>
                      <Link>선지급포인트 서비스</Link>
                      <Link>S선지급포인트 서비스</Link>
                      <Link>포인트연계할부 서비스(세이브서비스)</Link>
                      <Link>삼성전자멤버십 서비스</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className={`closeList boldClass ${activeMainMenu === "menu7" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu07", "menu7")}>
                  정부지원사업
                  <img src={activeMainMenu === "menu7" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu7" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu07" && (
                  <ul className="subMenu">
                    <li>
                      <Link>정부지원금</Link>
                      <Link>국가바우처</Link>
                      <Link>유가보조금</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu7" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu07", "menu7")}>
                  혜택가맹점
                  <img src={activeMainMenu === "menu7" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu7" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu07" && (
                  <ul className="subMenu">
                    <li>
                      <Link>무이자할부 가맹점</Link>
                      <Link>보너스클럽</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className={`closeList boldClass ${activeMainMenu === "menu8" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu08", "menu8")}>
                  전용혜택
                  <img src={activeMainMenu === "menu8" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu8" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu08" && (
                  <ul className="subMenu">
                    <li>
                      <Link className="submenuArrow">프리미엄 카드</Link>
                      <Link>트레이더스</Link>
                      <Link>국민행복카드</Link>
                      <Link>SFC</Link>
                      <Link>BIZ</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>

          <div className={`class3 ${activeButton === "button3" ? "show" : ""}`}>
            <ul>
              <li className={`closeList boldClass ${activeMainMenu === "menu9" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu submenuArrow" onClick={() => handleButtonClickSMenu("subMenu09", "menu9")}>
                  카드안내
                </div>
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu9" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu submenuArrow" onClick={() => handleButtonClickSMenu("subMenu09", "menu9")}>
                  내게 맞는 카드
                </div>
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu10" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu10", "menu10")}>
                  카드 발급 상황
                </div>
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu10" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu10", "menu10")}>
                  카드 사용등록
                </div>
              </li>

              <li className={`closeList boldClass ${activeMainMenu === "menu11" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu11", "menu11")}>
                  기프트카드
                  <img src={activeMainMenu === "menu11" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu11" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu11" && (
                  <ul className="subMenu">
                    <li>
                      <Link to="#">안내/구매</Link>
                      <Link to="#">충전</Link>
                      <Link to="#">잔액환불</Link>
                      <Link to="#">부가서비스</Link>
                      <Link to="#">구매 및 배송 조회</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>

          <div className={`class4 ${activeButton === "button4" ? "show" : ""}`}>
            <ul>
              <li className={`closeList boldClass ${activeMainMenu === "menu12" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu submenuArrow" onClick={() => handleButtonClickSMenu("subMenu12", "menu12")}>
                  단기카드대출
                </div>
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu12" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu submenuArrow" onClick={() => handleButtonClickSMenu("subMenu12", "menu12")}>
                  장기카드대출
                </div>
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu13" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu submenuArrow" onClick={() => handleButtonClickSMenu("subMenu13", "menu13")}>
                  신용대출
                </div>
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu13" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu submenuArrow" onClick={() => handleButtonClickSMenu("subMenu13", "menu13")}>
                  일부결제금액이월약정(리볼빙)
                </div>
              </li>

              <li className={`closeList boldClass ${activeMainMenu === "menu14" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu11", "menu14")}>
                  전자/내구재 할부금융
                </div>
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu14" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu submenuArrow" onClick={() => handleButtonClickSMenu("subMenu14", "menu14")}>
                  자동차
                </div>
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu15" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu submenuArrow" onClick={() => handleButtonClickSMenu("subMenu15", "menu15")}>
                  보험
                </div>
              </li>
            </ul>
          </div>

          <div className={`class5 ${activeButton === "button5" ? "show" : ""}`}>
            <ul>
              <li className={`closeList boldClass ${activeMainMenu === "menu16" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu " onClick={() => handleButtonClickSMenu("subMenu16", "menu16")}>
                  정기결제메인
                </div>
              </li>

              <li className={`closeList boldClass ${activeMainMenu === "menu16" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu " onClick={() => handleButtonClickSMenu("subMenu16", "menu16")}>
                  납부
                  <img src={activeMainMenu === "menu16" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu16" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu16" && (
                  <ul className="subMenu">
                    <li>
                      <Link to="#">한번에 신청하기</Link>
                      <Link to="#">아파트 관리비</Link>
                      <Link to="#">전화요금</Link>
                      <Link to="#">도시가스요금</Link>
                      <Link to="#">건강보험/국민연금</Link>
                      <Link to="#">4대 사회보험</Link>
                      <Link to="#">전기요금</Link>
                      <Link to="#">유치원 납입금</Link>
                      <Link to="#">초중고 학교납입금</Link>
                      <Link to="#">지방세입 모바일 고지서</Link>
                      <Link to="#">대학등록금</Link>
                      <Link to="#">부동산 임대료</Link>
                      <Link to="#">농지보전부담금</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu17" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu " onClick={() => handleButtonClickSMenu("subMenu17", "menu17")}>
                  구독
                  <img src={activeMainMenu === "menu17" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu17" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu17" && (
                  <ul className="subMenu">
                    <li>
                      <Link to="#">안심쇼핑플러스상품</Link>
                      <Link to="#">디지털매거진상품</Link>
                      <Link to="#">안심주차번호서비스</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu17" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu " onClick={() => handleButtonClickSMenu("subMenu17", "menu17")}>
                  알림
                  <img src={activeMainMenu === "menu17" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu17" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu17" && (
                  <ul className="subMenu">
                    <li>
                      <Link to="#">카드이용알림</Link>
                      <Link to="#">체크카드알림</Link>
                      <Link to="#">부정사용방지알림</Link>
                      <Link to="#">카드이용메일알림</Link>
                      <Link to="#">온라인거래알림</Link>
                      <Link to="#">휴대폰인증서서비스</Link>
                      <Link to="#">세이프케어상품</Link>
                      <Link to="#">종합정보보호상품</Link>
                      <Link to="#">명의도용차단서비스</Link>
                      <Link to="#">채무면제/유예상품</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu18" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu " onClick={() => handleButtonClickSMenu("subMenu18", "menu18")}>
                  약정
                  <img src={activeMainMenu === "menu18" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu18" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu18" && (
                  <ul className="subMenu">
                    <li>
                      <Link to="#">간편식 정기쇼핑(My 큐커플랜)</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>

          <div className={`class6 ${activeButton === "button6" ? "show" : ""}`}>
            <ul>
              <li className={`closeList boldClass ${activeMainMenu === "menu19" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu19", "menu19")}>
                  S PLUS(모바일 요금제)
                </div>
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu19" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu submenuArrow" onClick={() => handleButtonClickSMenu("subMenu19", "menu19")}>
                  쇼핑
                </div>
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu20" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu submenuArrow" onClick={() => handleButtonClickSMenu("subMenu20", "menu20")}>
                  국내제휴몰
                </div>
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu20" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu submenuArrow" onClick={() => handleButtonClickSMenu("subMenu20", "menu20")}>
                  보험
                </div>
              </li>

              <li className={`closeList boldClass ${activeMainMenu === "menu21" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu21", "menu21")}>
                  다이렉트오토
                </div>
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu21" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu21", "menu21")}>
                  삼성카드스토리
                </div>
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu22" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu22", "menu22")}>
                  렌탈
                </div>
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu22" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu22", "menu22")}>
                  쿠폰박스
                </div>
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu23" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu submenuArrow" onClick={() => handleButtonClickSMenu("subMenu23", "menu23")}>
                  여행
                </div>
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu23" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu submenuArrow" onClick={() => handleButtonClickSMenu("subMenu23", "menu23")}>
                  웨딩
                </div>
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu24" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu submenuArrow" onClick={() => handleButtonClickSMenu("subMenu24", "menu24")}>
                  열린나눔
                </div>
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu24" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu submenuArrow" onClick={() => handleButtonClickSMenu("subMenu24", "menu24")}>
                  영랩
                </div>
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu25" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu25", "menu25")}>
                  아지냥이
                </div>
              </li>
            </ul>
          </div>

          <div className={`class7 ${activeButton === "button7" ? "show" : ""}`}>
            <ul>
              <li className={`closeList boldClass ${activeMainMenu === "menu26" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu26", "menu26")}>
                  상담안내/신청
                  <img src={activeMainMenu === "menu26" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu26" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu26" && (
                  <ul className="subMenu">
                    <li>
                      <Link to="#">상담하기</Link>
                      <Link to="#">제안하기</Link>
                      <Link to="#">칭찬하기</Link>
                      <Link to="#">전자민원 접수</Link>
                      <Link to="#">나의 상담내역</Link>
                      <Link to="#">철회/항변 접수</Link>
                      <Link to="#">온라인결제 취소 중재</Link>
                      <Link to="#">월 사용료 결제카드 자동연계 신청</Link>
                      <Link to="#">ARS 이용안내</Link>
                      <Link to="#">고객서비스센터 안내</Link>
                      <Link to="#">장애인/고령자 편의 제도 안내</Link>
                      <Link to="#">카드해지</Link>
                      <Link to="#">삼성카드 CS패널</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu26" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu26", "menu26")}>
                  금융소비자보호
                  <img src={activeMainMenu === "menu26" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu26" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu26" && (
                  <ul className="subMenu">
                    <li>
                      <Link to="#">금융소비자보호포털</Link>
                      <Link to="#">자료열람요구권</Link>
                      <Link to="#">위법계약해지권</Link>
                      <Link to="#">대출철회 신청/조회</Link>
                      <Link to="#">금리인하요구권 신청</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className={`closeList boldClass ${activeMainMenu === "menu27" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu27", "menu27")}>
                  해외이용
                  <img src={activeMainMenu === "menu27" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu27" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu27" && (
                  <ul className="subMenu">
                    <li>
                      <Link to="#">해외 이용 종합안내</Link>
                      <Link to="#">해외 이용 잠금 서비스</Link>
                      <Link to="#">해외 출입국 정보 활용 동의·변경</Link>
                      <Link to="#">해외이용분할납부</Link>
                      <Link to="#">해외 결제용 우편번호</Link>
                      <Link to="#">해외 온라인 가상카드번호</Link>
                      <Link to="#">해외 이용내역 이의 신청</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu27" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu27", "menu27")}>
                  카드 이용 필수정보
                  <img src={activeMainMenu === "menu27" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu27" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu27" && (
                  <ul className="subMenu">
                    <li>
                      <Link to="#">신용카드 소비자가이드</Link>
                      <Link to="#">이용약관</Link>
                      <Link to="#">개인정보보호정책</Link>
                      <Link to="#">신용정보활용체제</Link>
                      <Link to="#">고객권리안내</Link>
                      <Link to="#">신용회복프로그램</Link>
                      <Link to="#">채권추심절차</Link>
                      <Link to="#">고객보호신고센터</Link>
                      <Link to="#">공정거래자율준수 프로그램</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu28" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu28", "menu28")}>
                  자주하는 질문(FAQ)
                </div>
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu28" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu28", "menu28")}>
                  뉴스/공지사항
                  <img src={activeMainMenu === "menu28" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu28" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu28" && (
                  <ul className="subMenu">
                    <li>
                      <Link to="#">공지사항</Link>
                      <Link to="#">서비스변경안내</Link>
                      <Link to="#">소비자주의경보</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className={`closeList boldClass ${activeMainMenu === "menu29" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu29", "menu29")}>
                  인증센터
                  <img src={activeMainMenu === "menu29" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu29" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu29" && (
                  <ul className="subMenu">
                    <li>
                      <Link to="#">스마트폰 공동인증서 복사</Link>
                      <Link to="#">공동인증서 등록/삭제</Link>
                      <Link to="#">금융인증서 등록/삭제</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={`closeList boldClass ${activeMainMenu === "menu29" ? "activeMainMenu" : ""}`}>
                <div className="mainMenu" onClick={() => handleButtonClickSMenu("subMenu29", "menu29")}>
                  보안 설정
                  <img src={activeMainMenu === "menu29" ? "/upArrow.png" : "/downArrow.png"} alt={activeMainMenu === "menu29" ? "up arrow" : "down arrow"} className="arrowIcon" />
                </div>
                {subMenu === "subMenu29" && (
                  <ul className="subMenu">
                    <li>
                      <Link to="#">보안프로그램 설치</Link>
                      <Link to="#">카드본인확인 서비스</Link>
                      <Link to="#">일반결제(안심클릭)</Link>
                      <Link to="#">SMS 결제</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="menuLast">
          <ul>
            자주 찾는 메뉴
            <li>
              <Link to="#">카드 발급조회</Link>{" "}
            </li>
            <li>
              <Link to="#">카드 사용등록</Link>{" "}
            </li>
            <li>
              <Link to="#">카드 분실신고</Link>{" "}
            </li>
            <li>
              <Link to="#">이번달 명세서</Link>{" "}
            </li>
            <li>
              <Link to="#">다음달 결제예정금액</Link>{" "}
            </li>
            <li>
              <Link to="#">카드 이용내역</Link>{" "}
            </li>
          </ul>
          <img src="/lastmenuimg.png" alt="" />
        </div>
      </div>
    </div>
  );
}
