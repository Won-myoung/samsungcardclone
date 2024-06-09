import "./css/finance.css";

export default function Finance() {
  return (
    <div className="finance">
      <ul className="financeSection01">
        <li>
          <strong>
            대출 이자 <br /> 계산하기
          </strong>
          <img src="/finance/ani01.svg" alt="" />
        </li>
        <li>
          <strong>
            내게 꼭 필요한 <br /> 보험은?
          </strong>
          <img src="/finance/ani02.svg" alt="" />
        </li>
        <li>
          <strong>
            새 차 살 때 <br /> 할부 얼마까지?
          </strong>
          <img src="/finance/ani03.svg" alt="" />
        </li>
      </ul>
      <div className="financeSection02">
        <h2>대출</h2>
        <ul className="financeSection02Item">
          <li>
            <h4>단기카드대출</h4>
            <span>현금서비스 현금이 필요할 때 365일 24시간</span>
            <div className="itemWrap">
              <div>
                <p>최대금액</p>
                <div className="flexWrap">
                  <strong>800</strong>
                  <h5>만원</h5>
                </div>
              </div>
              <div className="marginTopText">
                <p>최저 이자율</p>
                <div className="flexWrap">
                  <span>연</span>
                  <strong>4.90</strong>
                  <h5>%</h5>
                </div>
              </div>
              <p className="pointText">💬 심사 결과에 따라 달라질 수 있습니다.</p>
              <button>신청하기</button>
            </div>
          </li>
          <li>
            <h4>장기카드대출</h4>
            <span>카드론 목돈이 필요할 때 상환 수수료 없이</span>
            <div className="itemWrap">
              <div>
                <p>최대금액</p>
                <div className="flexWrap">
                  <strong>5000</strong>
                  <h5>만원</h5>
                </div>
              </div>
              <div className="marginTopText">
                <p>최저 이자율</p>
                <div className="flexWrap">
                  <span>연</span>
                  <strong>4.90</strong>
                  <h5>%</h5>
                </div>
              </div>
              <p className="pointText">💬 심사 결과에 따라 달라질 수 있습니다.</p>
              <button>신청하기</button>
            </div>
          </li>
          <li className="columnWrap">
            <div>
              <h4>신용대출</h4>
              <span>삼성카드가 없어도 휴대폰 인증으로 빠르게</span>
              <div className="itemWrap rowWrap">
                <div>
                  <p>
                    휴대폰 인증으로
                    <br />
                    신청하면
                  </p>
                  <div className="flexWrap">
                    <h5>최대</h5>
                    <strong>500</strong>
                    <h5>만원</h5>
                  </div>
                </div>
                <div>
                  <p>
                    공동인증서 인증으로
                    <br />
                    신청하면
                  </p>
                  <div className="flexWrap">
                    <h5>최대</h5>
                    <strong>5,000</strong>
                    <h5>만원</h5>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4>일부결제금액이월약정(리볼빙)</h4>
              <div className="itemWrap rowWrap">
                <div>
                  <p>최소 결제 비율</p>
                  <div className="flexWrap">
                    <strong>10~30</strong>
                    <h5>%</h5>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="financeSection03">
        <h2>똑똑한 대출 꿀팁</h2>
        <ul>
          <li>
            <img src="/finance/tip01.png" alt="" />
            <h4>
              카드대출로 <br />
              카드대금 납부
            </h4>
            <p>
              카드 결제대금이 <br />
              부족할 때 이용
            </p>
          </li>
          <li>
            <img src="/finance/tip02.png" alt="" />
            <h4>
              만기일 <br />
              연장 신청
            </h4>
            <p>
              납입 계획을 <br />
              다시 세워야 할 때
            </p>
          </li>
          <li>
            <img src="/finance/tip03.png" alt="" />
            <h4>
              카드대출 <br />
              예약 신청
            </h4>
            <p>
              꼭 필요한 날 <br />
              미리 신청
            </p>
          </li>
          <li>
            <img src="/finance/tip04.png" alt="" />
            <h4>
              혜택 예약 <br />
              서비스 신청
            </h4>
            <p>
              대출 예정일에 <br />
              혜택을 받고 싶다면
            </p>
          </li>
          <li>
            <img src="/finance/tip05.png" alt="" />
            <h4>
              이자율 <br />
              산정내역 조회
            </h4>
            <p>
              산정방식이 <br />
              궁금하다면
            </p>
          </li>
          <li>
            <img src="/finance/tip06.png" alt="" />
            <h4>
              금리인하 <br />
              요구권
            </h4>
            <p>
              신용상태가 <br />
              개선됐을때 이용
            </p>
          </li>
          <li>
            <img src="/finance/tip07.png" alt="" />
            <h4>
              대출철회 <br />
              신청/조회
            </h4>
            <p>
              대출금 완납후 <br />
              대출철회하고 싶다면
            </p>
          </li>
        </ul>
      </div>
      <div className="financeSection04">
        <div className="financeSection04BoxLeftbox">
          <h3>자동차</h3>
          <ul>
            <li>
              <img src="/finance/icon-spot-36-px-direct-auto-3x.png" alt="" />
              <div className="financeSection04Textbox">
                <strong>다이렉트 오토</strong>
                <p>쉽고 편리한 자동차 구매방법!</p>
              </div>
            </li>
            <li>
              <img src="/finance/icon-spot-36-px-direct-auto-card-3x.png" alt="" />
              <div className="financeSection04Textbox">
                <strong>신차 할부</strong>
                <p>카드할부 연 4.9%~5.2%, 중도상환수수료 없음</p>
              </div>
            </li>
            <li>
              <img src="/finance/icon-spot-36-px-car-new-sum-3x.png" alt="" />
              <div className="financeSection04Textbox">
                <strong>신차 일시불</strong>
                <p>삼성카드로 결제하면 1.0% 캐시백</p>
              </div>
            </li>
            <li>
              <img src="/finance/icon-spot-36-px-car-used-sum-3x.png" alt="" />
              <div className="financeSection04Textbox">
                <strong>중고차 일시불</strong>
                <p>중고차 살 때도 0.9% 캐시백 혜택</p>
              </div>
            </li>
          </ul>
          <ul className="alignItemCenter">
            <li>
              <img src="/finance/icon-spot-36-px-car-rent-list-3x.png" alt="" />
              <div className="financeSection04Textbox">
                <strong>장기렌터카·오토리스 계약내역</strong>
              </div>
            </li>
            <li>
              <img src="/finance/icon-spot-36-px-car-mortgage-3x.png" alt="" />
              <div className="financeSection04Textbox">
                <strong>자동차 근저당 설정 해지</strong>
              </div>
            </li>
            <li>
              <img src="/finance/icon-spot-36-px-car-rent-list-3x.png" alt="" />
              <div className="financeSection04Textbox">
                <strong>할부금융 이용내역</strong>
              </div>
            </li>
          </ul>
        </div>
        <div className="financeSection04BoxRightbox">
          <h3>보험</h3>
          <ul>
            <li>
              <img src="/finance/icon-spot-36-px-insurance-aia-3x.png" alt="" />
              <div className="financeSection04Textbox">
                <strong>다이렉트 AIA 카드값 걱정없는 건강보험</strong>
                <p>특정 질병일 때 카드채무금액 면제</p>
              </div>
            </li>
            <li>
              <img src="/finance/icon-spot-36-px-insurance-super-3x.png" alt="" />
              <div className="financeSection04Textbox">
                <strong>맞춤형 100세 든든 슈퍼 암보험</strong>
                <p>보험가입 질문 간소화</p>
              </div>
            </li>
            <li>
              <img src="/finance/icon-spot-36-px-insurance-car-3x.png" alt="" />
              <div className="financeSection04Textbox">
                <strong>자동차보험</strong>
                <p>삼성카드에서 결제하면 상품권 혜택</p>
              </div>
            </li>
            <li>
              <img src="/finance/icon-spot-36-px-insurance-hospital-3x.png" alt="" />
              <div className="financeSection04Textbox">
                <strong>실손의료비 보험</strong>
                <p>늘어나는 병원비 부담 대비</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
