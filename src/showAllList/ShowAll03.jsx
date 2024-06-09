import { Link } from "react-router-dom";

export default function ShowAll03() {
  return (
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
  );
}
