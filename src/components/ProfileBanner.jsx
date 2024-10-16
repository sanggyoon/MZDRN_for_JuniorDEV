import "./ProfileBanner.css";

function ProfileBanner({ isProfileVisible }) {
  return (
    <div
      className={`profileBG_wrapper ${
        isProfileVisible ? "showProfile" : "hideProfile"
      }`}
    >
      <h1>ProfileBanner</h1>
      <h2>유저 프로필 이미지 배경</h2>
    </div>
  );
}

export default ProfileBanner;
