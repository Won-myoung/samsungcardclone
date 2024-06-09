import { Link } from "react-router-dom";

export default function ShowAll06() {
  return (
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
  );
}
