import { Link } from "react-router-dom";

export default function ShowAll02() {
  return (
    <div className="showAllWrap showAllWrap02">
      <h4>VOD/음원</h4>
      <ul className="showAllBodyItem">
        <li>
          <Link to="#">
            <img src="/payment/ico_mrc_grp_25.png" alt="" />
            <h4>넷플릭스</h4>
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src="/payment/ico_mrc_grp_26.png" alt="" />
            <div>
              <h4>멜론</h4>
            </div>
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src="/payment/ico_mrc_grp_27.png" alt="" />
            <h4>벅스</h4>
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src="/payment/ico_mrc_grp_28.png" alt="" />
            <h4>왓챠</h4>
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src="/payment/ico_mrc_grp_29.png" alt="" />
            <h4>웨이브</h4>
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
            <img src="/payment/ico_mrc_grp_30.png" alt="" />
            <h4>지니뮤직</h4>
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src="/payment/ico_mrc_grp_56.png" alt="" />
            <h4>티빙</h4>
          </Link>
        </li>
      </ul>
    </div>
  );
}
