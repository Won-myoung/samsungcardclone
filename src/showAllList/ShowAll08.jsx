import { Link } from "react-router-dom";

export default function ShowAll08() {
  return (
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
  );
}
