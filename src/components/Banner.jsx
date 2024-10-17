import "./Banner.css";

function Banner({ isBannerVisible }) {
  return (
    <div
      className={`banner_wrapper ${
        isBannerVisible ? "showBanner" : "hideBanner"
      }`}
    >
      <h1>Banner</h1>
      <h2>*Swiper React Components 라이브러리 사용해서 슬라이드 배너 구현*</h2>
    </div>
  );
}

export default Banner;
