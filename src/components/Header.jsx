import "./Header.css";
import { useState, useEffect } from "react";

import ButtonBG from "./ButtonBG";
import ButtonText from "./ButtonText";
import LoginModal from "./LoginModal";

function Header({ setSelectedPage, setIsHomeVisible }) {
  // 페이지 핸들러
  const handlePageChange = (selectedPage) => {
    setSelectedPage(selectedPage);
    setIsHomeVisible(false);
  };

  // 버튼 클릭시 로그인 모달 팝업
  const [isActive, setIsActive] = useState(false);

  const openModal = () => {
    setIsActive(true);
  };

  const closeModal = () => {
    setIsActive(false);
  };

  // 소개 페이지 슬라이드
  const [isHomeChecked, setIsHomeChecked] = useState(true);

  useEffect(() => {
    setIsHomeVisible(isHomeChecked);
  }, [isHomeChecked, setIsHomeVisible]);

  const handleHomeChange = () => {
    setIsHomeChecked((prev) => !prev);
  };

  return (
    <div className="header">
      <span>MZDRN</span>

      <ul>
        <li>
          <input
            type="checkbox"
            id="slide_home"
            name="slideHome"
            checked={isHomeChecked}
            onClick={handleHomeChange}
          />
          <label htmlFor="slide_home">HOME</label>
        </li>
        <li>
          <input
            type="radio"
            id="pageChoice_q&a"
            name="pageChoice"
            value="qanda"
            onClick={(e) => handlePageChange(event.target.value)}
          />
          <label htmlFor="pageChoice_q&a">Q&A</label>
        </li>
        <li>
          <input
            type="radio"
            id="pageChoice_feed"
            name="pageChoice"
            value="feed"
            onClick={(e) => handlePageChange(event.target.value)}
          />
          <label htmlFor="pageChoice_feed">FEED</label>
        </li>
        <li>
          <input
            type="radio"
            id="pageChoice_board"
            name="pageChoice"
            value="board"
            onClick={(e) => handlePageChange(event.target.value)}
          />
          <label htmlFor="pageChoice_board">BOARD</label>
        </li>
      </ul>

      <div className="chagnedButtonByLogin">
        {/* isLogined 확인 이후 출력되는 버튼이 달라야함. */}
        <ButtonText
          text={"시작하기"}
          class={"active_loginModal"}
          onClick={openModal}
        />

        <ButtonBG
          text={"My Page"}
          class={"btn_myPage"}
          onClick={() => handlePageChange("myPage")}
        />

        <label htmlFor="pageChoice_myPage"></label>
      </div>

      <LoginModal isActive={isActive} closeModal={closeModal} />
    </div>
  );
}

export default Header;
