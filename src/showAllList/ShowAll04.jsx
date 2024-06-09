import { Link } from "react-router-dom";

export default function ShowAll04() {
  return (
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
  );
}
