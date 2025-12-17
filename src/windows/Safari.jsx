import { WindowControls } from "#components";
import { articles } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";
import React from "react";

const Safari = () => {
  const { openWindow } = useWindowStore();

  const handleArticleClick = (article) => {
    openWindow("article", article);
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />

        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>
        <div className="flex-center flex-1 gap-3 ">
          <ShieldHalf className="icon" />

          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="blog">
        <h2>Insights & Projects</h2>
        <div className="space-y-8">
          {articles.map((article) => (
            <div key={article.id} className="blog-post cursor-pointer" onClick={() => handleArticleClick(article)}>
              <div className="col-span-2">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="content">
                <p>{article.date}</p>
                <h3>{article.title}</h3>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Check out the full post <MoveRight className="icon-hover" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
