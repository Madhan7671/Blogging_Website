import React from "react";
import "../styles/Publish.css";

const Publish = () => {
  return (
    <div className="publish-page">
      <h2 className="publish-title">📝 Publish Your Article</h2>
      <form className="publish-form">
        <input type="text" className="publish-input" placeholder="Article ID" />
        <input type="text" className="publish-input" placeholder="Title" />
        <input type="text" className="publish-input" placeholder="Excerpt" />
        <textarea
          className="publish-textarea"
          placeholder="Content"
          rows="10"
        />
        <input
          type="text"
          className="publish-input"
          placeholder="Tags (comma separated)"
        />
        <input
          type="text"
          className="publish-input"
          placeholder="Read Time (e.g. 5 min)"
        />
        <input type="text" className="publish-input" placeholder="Category" />
        <input
          type="text"
          className="publish-input"
          placeholder="Author Name"
        />
        <input type="date" className="publish-input" placeholder="Date" />
        <button type="submit" className="publish-button">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Publish;
