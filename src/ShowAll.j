import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/showall.css";
import ShowAll01 from "./showAllList/ShowAll01";
import ShowAll02 from "./showAllList/ShowAll02";

export default function ShowMore() {
  //버튼
  const [currentTab, setCurrentTab] = useState("showAll01");
  const handleButtonClick = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="showAll">
      {/*       <div className="showAllButton">
        <button
          onClick={() => handleButtonClick("showAll01")}
          className={currentTab === "showAll01" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => handleButtonClick("showAll02")}
          className={currentTab === "showAll02" ? "active" : ""}
        >
          VOD/음원
        </button>
        <button
          onClick={() => handleButtonClick("showAll03")}
          className={currentTab === "showAll03" ? "active" : ""}
        >
          정기배송
        </button>
        <button
          onClick={() => handleButtonClick("showAll04")}
          className={currentTab === "showAll04" ? "active" : ""}
        >
          렌탈
        </button>
        <button
          onClick={() => handleButtonClick("showAll05")}
          className={currentTab === "showAll05" ? "active" : ""}
        >
          교육/학습지
        </button>
        <button
          onClick={() => handleButtonClick("showAll06")}
          className={currentTab === "showAll06" ? "active" : ""}
        >
          문화/컬처
        </button>
        <button
          onClick={() => handleButtonClick("showAll07")}
          className={currentTab === "showAll07" ? "active" : ""}
        >
          케어/멤버십
        </button>
        <button
          onClick={() => handleButtonClick("showAll08")}
          className={currentTab === "showAll08" ? "active" : ""}
        >
          식음료
        </button>
      </div> */}

      <div className="showAllBody">
        {currentTab === "showAll01" && <ShowAll01 />}
        {currentTab === "showAll02" && <ShowAll02 />}
        {currentTab === "showAll03" && (
          <div className="showAllWrap showAllWrap03">
            <h4>정기배송</h4>
            <ul className="showAllBodyItem">
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_19.png" alt="" />
                  <div>
                    <h4>꾸까</h4>
                    <p>꽃이 주는 행복한 일상</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_43.png" alt="" />
                  <div>
                    <h4>베이컨 박스</h4>
                    <p>Dogs Love BACON!</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_39.png" alt="" />
                  <div>
                    <h4>술담화</h4>
                    <p>찾아오는 인생술</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_20.png" alt="" />
                  <div>
                    <h4>오픈갤러리</h4>
                    <p>그림도 '렌탈 시대'</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_42.png" alt="" />
                  <div>
                    <h4>필리</h4>
                    <p>개인별 맞춤영양제</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_59.png" alt="" />
                  <div>
                    <h4>핏펫박스</h4>
                    <p>수의사가 제안하는 맞춤 반려 생활</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_44.png" alt="" />
                  <div>
                    <h4>해피문데이</h4>
                    <p>여성용품 정기배송</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
        {currentTab === "showAll04" && (
          <div className="showAllWrap showAllWrap04">
            <h4>렌탈</h4>
            <ul className="showAllBodyItem">
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_9.png" alt="" />
                  <div>
                    <h4>SK매직</h4>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_10.png" alt="" />
                  <div>
                    <h4>바디프렌드</h4>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_16.png" alt="" />
                  <div>
                    <h4>웰스</h4>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_58.png" alt="" />
                  <div>
                    <h4>청호나이스</h4>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_12.png" alt="" />
                  <div>
                    <h4>코웨이</h4>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_18.png" alt="" />
                  <div>
                    <h4>쿠쿠</h4>
                    <p>정수기, 공기청정기, 제습기, 안마의자</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_13.png" alt="" />
                  <div>
                    <h4>현대렌탈케어</h4>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_15.png" alt="" />
                  <div>
                    <h4>휴테크</h4>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
        {currentTab === "showAll05" && (
          <div className="showAllWrap showAllWrap05">
            <h4>교육/학습지</h4>
            <ul className="showAllBodyItem">
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_21.png" alt="" />
                  <div>
                    <h4>교원 구몬학습</h4>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_22.png" alt="" />
                  <div>
                    <h4>대교 눈높이</h4>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_23.png" alt="" />
                  <div>
                    <h4>웅진씽크빅</h4>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_24.png" alt="" />
                  <div>
                    <h4>한솔교육</h4>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
        {currentTab === "showAll06" && (
          <div className="showAllWrap showAllWrap06">
            <h4>문화/컬처</h4>
            <ul className="showAllBodyItem">
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_33.png" alt="" />
                  <div>
                    <h4>리디셀렉트</h4>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_32.png" alt="" />
                  <div>
                    <h4>밀리의 서재</h4>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_57.png" alt="" />
                  <div>
                    <h4>윌라</h4>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
        {currentTab === "showAll07" && (
          <div className="showAllWrap showAllWrap07">
            <h4>케어/멤버십</h4>
            <ul className="showAllBodyItem">
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_86.png" alt="" />
                  <div>
                    <h4>대명아임레디</h4>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_88.png" alt="" />
                  <div>
                    <h4>롯데오너스</h4>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_81.png" alt="" />
                  <div>
                    <h4>세스코</h4>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_47.png" alt="" />
                  <div>
                    <h4>안심주차번호서비스</h4>
                    <p>전화번호 노출피해 예방</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_45.png" alt="" />
                  <div>
                    <h4>안심쇼핑플러스</h4>
                    <p>카드 안심 관리에 구매물품 보상</p>
                    <span>신세계상품권 1만원, 스타벅스 2잔 선물</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_11.png" alt="" />
                  <div>
                    <h4>에스원 세콤</h4>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
        {currentTab === "showAll08" && (
          <div className="showAllWrap showAllWrap08">
            <h4>식음료</h4>
            <ul className="showAllBodyItem">
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_38.png" alt="" />
                  <div>
                    <h4>데일리샷</h4>
                    <p>우리동네 술 할인앱</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_36.png" alt="" />
                  <div>
                    <h4>마켓컬리 컬리패스</h4>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_40.png" alt="" />
                  <div>
                    <h4>스타벅스 자동충전</h4>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_41.png" alt="" />
                  <div>
                    <h4>요기요 요기패스</h4>
                    <p>끝이 없는 할인 구독 서비스</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/payment/ico_mrc_grp_37.png" alt="" />
                  <div>
                    <h4>쿠팡 로켓와우클럽</h4>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
