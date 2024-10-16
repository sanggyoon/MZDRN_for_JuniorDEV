import "./Header.css";
import { useState } from "react";

import Button from "./Button";
import LoginModal from "./LoginModal";

function Header({ setSelectedPage }) {
  // 페이지 핸들러
  const handlePageChange = (selectedPage) => {
    setSelectedPage(selectedPage);
  };

  // 버튼 클릭시 로그인 모달 팝업
  const [isActive, setIsActive] = useState(false);
  const openModal = () => {
    setIsActive(true);
  };
  const closeModal = () => {
    setIsActive(false);
  };

  return (
    <div className="header">
      <span>MZDRN</span>

      <ul>
        <li>
          <input
            type="radio"
            id="pageChoice_home"
            name="pageChoice"
            value="home"
            onClick={(e) => handlePageChange(event.target.value)}
          />
          <label htmlFor="pageChoice_home">HOME</label>
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
        <Button
          text={"시작하기"}
          class={"active_loginModal"}
          onClick={openModal}
        />

        <Button
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
