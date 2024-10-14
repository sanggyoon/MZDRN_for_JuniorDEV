import "./LoginModal.css";

function LoginModal({ isActive, closeModal }) {
  return (
    <div
      className={`loginModal_bg ${isActive ? "active" : ""}`}
      onClick={closeModal}
    >
      <div
        className={`loginModal ${isActive ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()} // 이건 뭔지 모르겠음
      >
        <h1>로그인 창</h1>
      </div>
    </div>
  );
}

export default LoginModal;
