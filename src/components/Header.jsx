import "./Header.css";
import { useState } from "react";
import Button from "./Button";
import LoginModal from "./LoginModal";

function Header({ setSelectedPage }) {
  // 선택된 페이지 상태 업데이트
  const handlePageChange = (event) => {
    setSelectedPage(event.target.value);
  };

  // 버튼 클릭시 로그인 모달 팝업, 배경 클릭시 모달 사라짐
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
            onChange={handlePageChange}
          />
          <label htmlFor="pageChoice_home">HOME</label>
        </li>
        <li>
          <input
            type="radio"
            id="pageChoice_q&a"
            name="pageChoice"
            value="qanda"
            onChange={handlePageChange}
          />
          <label htmlFor="pageChoice_q&a">Q&A</label>
        </li>
        <li>
          <input
            type="radio"
            id="pageChoice_feed"
            name="pageChoice"
            value="feed"
            onChange={handlePageChange}
          />
          <label htmlFor="pageChoice_feed">FEED</label>
        </li>
        <li>
          <input
            type="radio"
            id="pageChoice_board"
            name="pageChoice"
            value="board"
            onChange={handlePageChange}
          />
          <label htmlFor="pageChoice_board">BOARD</label>
        </li>
      </ul>

      <Button
        text={"시작하기"}
        class={"active_loginModal"}
        onClick={openModal}
      />

      <LoginModal isActive={isActive} closeModal={closeModal} />
    </div>
  );
}

export default Header;
