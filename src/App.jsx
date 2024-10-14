import "./App.css";
import { useState, useEffect } from "react";

// components
import Header from "./components/Header";
import Navigator from "./components/Navigator";
import Banner from "./components/Banner";
import LoginModal from "./components/LoginModal";

//page content
import Home from "./pages/Home";
import QandA from "./pages/Q&A";
import Feed from "./pages/Feed";
import Board from "./pages/Board";
import ChatBot from "./pages/ChatBot";
import NewPost from "./pages/NewPost";

function App() {
  const [selectedPage, setSelectedPage] = useState("home"); // 페이지 핸들러 상태
  const [isBannerVisible, setIsBannerVisible] = useState(true); // 배너 가시 상태

  // 페이지 핸들러
  const renderPageContent = (selectedPage) => {
    switch (selectedPage) {
      case "home":
        return <></>;
      case "qanda":
        return <QandA />;
      case "feed":
        return <Feed />;
      case "board":
        return <Board />;
      case "chatBot":
        return <ChatBot />;
      case "newPost":
        return <NewPost />;
      default:
        return null;
    }
  };

  // 배너 높이 조절
  useEffect(() => {
    if (selectedPage === "chatBot" || selectedPage === "newPost") {
      setIsBannerVisible(false);
    } else {
      setIsBannerVisible(true);
    }
  }, [selectedPage]);

  return (
    <main>
      <Header setSelectedPage={setSelectedPage} />
      <div style={{ height: "100px" }}></div>
      <Banner isBannerVisible={isBannerVisible} />
      <Home selectedPage={selectedPage} />
      <Navigator setSelectedPage={setSelectedPage} />
      <div className="mainScript">
        <h1>main Content</h1>
        {renderPageContent(selectedPage)}
      </div>

      <LoginModal />
    </main>
  );
}

export default App;
