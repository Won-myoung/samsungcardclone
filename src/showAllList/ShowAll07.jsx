import { Link } from "react-router-dom";

export default function ShowAll07() {
  return (
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
              {/* <span>신세계상품권 1만원, 스타벅스 2잔 선물</span> */}
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
  );
}
