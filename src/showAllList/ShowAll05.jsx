import { Link } from "react-router-dom";

export default function ShowAll05() {
  return (
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
  );
}
