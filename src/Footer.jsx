import "./css/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerWrap">
        <div className="footer01">
          <strong>ARS(유료)</strong> 대표전화 1588-8700 카드신청 1688-1133
          분실신고·한도승인 (국내) 1588-8900 (해외) 82-2-2000-8100,
          800-1588-8700{" "}
          <strong>
            <span>시각장애인 전용 상담센터 1588-1997</span>
          </strong>
        </div>
        <hr className="relativeLine" />
        <ul className="footer02">
          <li>
            <strong>회사소개</strong>
          </li>
          <li>ENGLISH</li>
          <li>전자민원접수</li>
          <li>이용약관</li>
          <li>고객권리 안내</li>
          <li>금융사기피해 예방</li>
        </ul>
        <div className="footer03">
          <strong>개인정보 처리방침</strong>
          <strong>위치기반서비스 이용약관</strong>통신중개판매상품 이메일
          <img src="./footer/ico_btn_help.png" className="questionMark"></img>
          lifecare.scard@samsung.com
          <a href="" className="infoConfirm">
            사업자정보 확인
          </a>
          <img
            src="./footer/bg_footer_company.png"
            className="arrowRight"
          ></img>
        </div>
        <ul className="footer04">
          <li>대표이사 사장 김대환</li>
          <li> 서울 중구 세종대로 67(04514)</li>
          <li> 사업자등록번호 202-81-45602</li>
          <li>통신판매업 신고번호 제 2009-서울중구-1449호</li>
        </ul>
        <div className="footer05">
          © SAMSUNG CARD CO., LTD. All rights reserved.
        </div>
        <div className="footer06">
          <button className="arrowLeft">arrowleft</button>
          <ul>
            <li>
              <a href="#">
                <img src="./footer/mark/mark01.jpg" alt="" />
                <p>국가고객만족도 10년 연속 1위</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./footer/mark/mark02.png" alt="" />
                <p>2022 정보 접근성 품질인증</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./footer/mark/mark03.jpg" alt="" />
                <p>국가고객만족도 10년 연속 1위</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./footer/mark/mark04.jpg" alt="" />
                <p>국가고객만족도 10년 연속 1위</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./footer/mark/mark05.jpg" alt="" />
                <p>국가고객만족도 10년 연속 1위</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./footer/mark/mark06.png" alt="" />
                <p>국가고객만족도 10년 연속 1위</p>
              </a>
            </li>
          </ul>
          <button className="arrowRight">arrowleft</button>
        </div>
      </div>
    </div>
  );
}