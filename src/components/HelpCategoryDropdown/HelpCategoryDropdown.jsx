import { useState } from "react";

const HelpCategoryDropdown = ({ category, articles }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="help-category">
      <div className="help-category-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{category}</h3>
        <span>{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && (
        <div className="help-articles">
          {articles.map((article, index) => (
            <div key={index} className="help-article">
              <h4>{article.title}</h4>
              <p>{article.excerpt}</p>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HelpCategoryDropdown;
