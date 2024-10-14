import "./Banner.css";

function Banner({ isBannerVisible }) {
  return (
    <div
      className={`banner_wrapper ${
        isBannerVisible ? "showBanner" : "hideBanner"
      }`}
    >
      <h1>Banner</h1>
      <h2>slick slide 사용해서 배너 구현</h2>
    </div>
  );
}

export default Banner;
