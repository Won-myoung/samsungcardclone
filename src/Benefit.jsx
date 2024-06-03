import { Link } from "react-router-dom";
import "./css/benefit.css";

export default function Benefit() {
  return (
    <div>
      <div className="benefit">
        <div className="benefitWrap">
          <Link to="#" className="benefitItem itemNo01">
            <div className="benefitTextWrap whiteText">
              <h2>내 카드 혜택</h2>
              <p>
                빠짐없이 이용하도록 <br />
                한눈에 보는 내 카드 혜택
              </p>
            </div>
            <img src="/benefit/benefit01.png" alt="" />
          </Link>
          <Link to="#" className="benefitItem itemNo02">
            <div className="benefitTextWrap">
              <h2>내 카드 혜택</h2>
              <p>
                빠짐없이 이용하도록 <br />
                한눈에 보는 내 카드 혜택
              </p>
            </div>
            <img src="/benefit/benefit02.png" alt="" />
          </Link>
        </div>
        <div className="benefitWrap secondWrap">
          <Link to="#" className="benefitItem itemNo03">
            <div className="benefitTextWrap">
              <h2>내 카드 혜택</h2>
              <p>
                빠짐없이 이용하도록 <br />
                한눈에 보는 내 카드 혜택
              </p>
            </div>
            <img src="/benefit/benefit03.png" alt="" />
          </Link>
          <Link to="#" className="benefitItem itemNo04">
            <div className="benefitTextWrap">
              <h2>내 카드 혜택</h2>
              <p>
                빠짐없이 이용하도록 <br />
                한눈에 보는 내 카드 혜택
              </p>
            </div>
            <img src="/benefit/benefit04.png" alt="" />
          </Link>
          <Link to="#" className="benefitItem itemNo05">
            <div className="benefitTextWrap">
              <h2>내 카드 혜택</h2>
              <p>
                빠짐없이 이용하도록 <br />
                한눈에 보는 내 카드 혜택
              </p>
            </div>
            <img src="/benefit/benefit05.png" alt="" />
          </Link>
          <Link to="#" className="benefitItem itemNo06">
            <div className="benefitTextWrap">
              <h2>내 카드 혜택</h2>
              <p>
                빠짐없이 이용하도록 <br />
                한눈에 보는 내 카드 혜택
              </p>
            </div>
            <img src="/benefit/benefit06.png" alt="" />
          </Link>
          <Link to="#" className="benefitItem itemNo07">
            <div className="benefitTextWrap">
              <h2>내 카드 혜택</h2>
              <p>
                빠짐없이 이용하도록 <br />
                한눈에 보는 내 카드 혜택
              </p>
            </div>
            <img src="/benefit/benefit07.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
