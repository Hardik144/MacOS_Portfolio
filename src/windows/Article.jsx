import React from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import ReactMarkdown from "react-markdown";
import useWindowStore from "#store/window";

// markdown imports
import cropcare from "../content/articles/cropcare-ai.md?raw";
import macos from "../content/articles/macos-portfolio.md?raw";
import pefi from "../content/articles/pefi.md?raw";

const articlesMap = {
  "cropcare-ai": cropcare,
  "macos-portfolio": macos,
  "pefi": pefi,
};

const Article = () => {
  const { windows } = useWindowStore();
  const data = windows?.article?.data;

  // 🔹 Track current markdown section
  let currentSection = null;

  const components = {
    h2: ({ children, ...props }) => {
      const text = String(children);
      currentSection = text;
      return (
        <h2 className="article-section-heading" {...props}>
          {children}
        </h2>
      );
    },

    p: ({ children, ...props }) => (
      <p className="article-paragraph" {...props}>
        {children}
      </p>
    ),

    ul: ({ children, ...props }) => {
      // Style Key Features list
      if (currentSection === "Key Features") {
        return (
          <ul className="feature-list" {...props}>
            {children}
          </ul>
        );
      }

      // Style Tech Stack list
      if (currentSection === "Tech Stack") {
        return (
          <ul className="tech-stack-list" {...props}>
            {children}
          </ul>
        );
      }

      return <ul {...props}>{children}</ul>;
    },

    li: ({ children, ...props }) => {
      // Tech Stack pills
      if (currentSection === "Tech Stack") {
        return (
          <li className="tech-pill" {...props}>
            {children}
          </li>
        );
      }

      // Normal bullet list
      return <li {...props}>{children}</li>;
    },
  };

  // 🔹 Window-store based rendering
  if (data) {
    const slug = data.link?.replace("/articles/", "");
    const content = articlesMap[slug];

    return (
      <>
        <div id="window-header">
          <WindowControls target="article" />
          <h2>{data.title}</h2>
        </div>

        <div className="article-content p-6 max-w-3xl mx-auto">
          {/* Hero image */}
          {data.image && (
            <div className="article-hero mb-6">
              <img src={data.image} alt={data.title} />
            </div>
          )}

          {/* Meta */}
          <div className="article-meta mb-6">
            {data.date && <p className="article-date">{data.date}</p>}
            {data.type && <span className="article-type">{data.type}</span>}
          </div>

          {/* Markdown */}
          {content ? (
            <ReactMarkdown components={components}>
              {content}
            </ReactMarkdown>
          ) : (
            <p className="text-gray-400">Article not found</p>
          )}
        </div>
      </>
    );
  }

  // 🔹 Fallback route-based rendering
  const path = window.location.pathname;
  if (!path.startsWith("/articles/")) return null;

  const slug = path.replace("/articles/", "");
  const content = articlesMap[slug];

  if (!content) {
    return (
      <>
        <div id="window-header">
          <WindowControls target="article" />
          <h2>Article</h2>
        </div>
        <div className="p-6">Article not found</div>
      </>
    );
  }

  return (
    <>
      <div id="window-header">
        <WindowControls target="article" />
        <h2 className="capitalize">
          {slug.replaceAll("-", " ")}
        </h2>
      </div>

      <div className="article-content p-6 max-w-3xl mx-auto">
        <ReactMarkdown components={components}>
          {content}
        </ReactMarkdown>
      </div>
    </>
  );
};

const ArticleWindow = WindowWrapper(Article, "article");
export default ArticleWindow;
