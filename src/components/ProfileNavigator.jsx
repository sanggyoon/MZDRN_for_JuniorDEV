import "./ProfileNavigator.css";

function ProfileNagivator({ setSelectedPage }) {
  // 페이지 핸들러
  const handlePageChange = (event) => {
    setSelectedPage(event.target.value);
  };

  return (
    <div className="profileNavigator">
      <h1>Navigator_activated Profile</h1>

      {/* 게시글 수정, 삭제 클릭하면 해당 버튼 게시글 요소에서 활성화? */}
      <ul>
        <li>게시글 수정</li>
        <li>게시글 삭제</li>
        <li>댓글 삭제</li>
        <li>내 정보 수정</li>
      </ul>
    </div>
  );
}

export default ProfileNagivator;
