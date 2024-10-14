import "./Home.css";
import { useEffect, useState } from "react";

function Home({ selectedPage }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selectedPage === "home") {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [selectedPage]);

  return (
    <div className={`home_content ${isVisible ? "slideDown" : "slideUp"}`}>
      <div style={{ height: "100px" }}></div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
