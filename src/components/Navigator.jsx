import "./Navigator.css";
import Button from "./Button";

function Nagivator() {
  return (
    <div className="navigator">
      <h1>Navigator</h1>

      <ul>
        <li>전체</li>
        <li>HOT</li>
        <li>내 게시글</li>
        <li>CHAT-BOT</li>
        <li>
          <Button text={"새 글 작성"} />
        </li>
      </ul>
    </div>
  );
}

export default Nagivator;
