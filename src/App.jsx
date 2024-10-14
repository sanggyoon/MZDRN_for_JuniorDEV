import "./App.css";
import { useState } from "react";

// components
import Header from "./components/Header";
import Nagivator from "./components/Navigator";
import Banner from "./components/Banner";
import LoginModal from "./components/LoginModal";

//page content
import Home from "./pages/Home";
import QandA from "./pages/Q&A";
import Feed from "./pages/Feed";
import Board from "./pages/Board";

function App() {
  // 페이지 핸들러
  const [selectedPage, setSelectedPage] = useState("home");
  const renderPageContent = (selectedPage) => {
    switch (selectedPage) {
      case "home":
        return <Home />;
      case "qanda":
        return <QandA />;
      case "feed":
        return <Feed />;
      case "board":
        return <Board />;
      default:
        return null;
    }
  };

  return (
    <main>
      <Header setSelectedPage={setSelectedPage} />
      <Banner />
      <Nagivator />
      <div className="mainScript">
        <h1>main script</h1>
        {renderPageContent(selectedPage)}
      </div>

      <LoginModal />
    </main>
  );
}

export default App;
