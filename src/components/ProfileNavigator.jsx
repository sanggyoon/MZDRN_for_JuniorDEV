import "./ProfileNavigator.css";

function ProfileNagivator({ setSelectedPage }) {
  // 페이지 핸들러
  const handlePageChange = (event) => {
    setSelectedPage(event.target.value);
  };

  return (
    <div className="profileNavigator">
      <h1>Navigator_activated Profile</h1>

      <ul>
        <li>게시글 수정</li>
        <li>게시글 삭제</li>
        <li>
          <input
            type="radio"
            id="pageChoice_commentItems"
            name="pageChoice"
            value="commentItems"
            onChange={handlePageChange}
          />
          <label htmlFor="pageChoice_commentItems">댓글 삭제</label>
        </li>
        <li>
          <input
            type="radio"
            id="pageChoice_editUserInfo"
            name="pageChoice"
            value="editUserInfo"
            onChange={handlePageChange}
          />
          <label htmlFor="pageChoice_editUserInfo">내 정보 수정</label>
        </li>
      </ul>
    </div>
  );
}

export default ProfileNagivator;
