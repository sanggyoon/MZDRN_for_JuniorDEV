import "./Home.css";
import { useEffect, useState } from "react";

function Home({ isHomeVisible }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isHomeVisible === true) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isHomeVisible]);

  return (
    <div className={`home_content ${isVisible ? "slideDown" : "slideUp"}`}>
      <div style={{ height: "100px" }}></div>
      <h1>Home</h1>
      <h2>*임시높이 100vh*</h2>
    </div>
  );
}

export default Home;
