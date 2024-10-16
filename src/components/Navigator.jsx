import "./Navigator.css";

function Nagivator({ setSelectedPage }) {
  // 페이지 핸들러
  const handlePageChange = (event) => {
    setSelectedPage(event.target.value);
  };

  return (
    <div className="navigator">
      <h1>Navigator</h1>

      <ul>
        <li>전체</li>
        <li>HOT</li>
        <li>
          <input
            type="radio"
            id="pageChoice_chatBot"
            name="pageChoice"
            value="chatBot"
            onChange={handlePageChange}
          />
          <label htmlFor="pageChoice_chatBot">CHAT-BOT</label>
        </li>
        <li>
          <input
            type="radio"
            id="pageChoice_newPost"
            name="pageChoice"
            value="newPost"
            onChange={handlePageChange}
          />
          <label htmlFor="pageChoice_newPost">새 글 작성</label>
        </li>
      </ul>
    </div>
  );
}

export default Nagivator;
