import "./App.css";
import { useState, useEffect } from "react";

// components
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";
import ProfileBanner from "./components/ProfileBanner";
import Banner from "./components/Banner";
import Navigator from "./components/Navigator";
import ProfileNavigator from "./components/ProfileNavigator";

//page content
import Home from "./pages/Home";
import QandA from "./pages/Q&A";
import Feed from "./pages/Feed";
import Board from "./pages/Board";
import ChatBot from "./pages/ChatBot";
import NewPost from "./pages/NewPost";
import MyPage from "./pages/MyPage";

function App() {
  const [selectedPage, setSelectedPage] = useState("home"); // 페이지 핸들러 상태
  const [isBannerVisible, setIsBannerVisible] = useState(true); // 배너 높이 상태
  const [isProfileVisible, setIsProfileVisible] = useState(false); // 프로필 이미지 높이 상태

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
      case "myPage":
        return <MyPage />;
      default:
        return null;
    }
  };

  // 광고 배너, 프로필 배너 선택 및 크기 조절
  useEffect(() => {
    if (selectedPage === "chatBot" || selectedPage === "newPost") {
      setIsBannerVisible(false);
      setIsProfileVisible(false);
    } else if (selectedPage === "myPage") {
      setIsBannerVisible(false);
      setIsProfileVisible(true);
    } else {
      setIsBannerVisible(true);
      setIsProfileVisible(false);
    }
  }, [selectedPage]);

  // navigator 선택
  const navigatorHandler = (selectedPage) => {
    if (selectedPage === "myPage") {
      return <ProfileNavigator setSelectedPage={setSelectedPage} />;
    } else {
      return <Navigator setSelectedPage={setSelectedPage} />;
    }
  };

  return (
    <main>
      <Header setSelectedPage={setSelectedPage} />
      <div style={{ height: "100px" }}></div>

      <Banner isBannerVisible={isBannerVisible} />
      <ProfileBanner isProfileVisible={isProfileVisible} />

      <Home selectedPage={selectedPage} />

      {navigatorHandler(selectedPage)}

      <div className="pageContent">
        <h1>main Content</h1>
        {renderPageContent(selectedPage)}
      </div>

      <LoginModal />
    </main>
  );
}

export default App;
