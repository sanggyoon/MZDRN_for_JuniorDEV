import Home from "../pages/Home";
import QandA from "../pages/Q&A";
import Feed from "../pages/Feed";
import Board from "../pages/Board";

export const renderPageContent = (selectedPage) => {
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
