import React from "react";
import "../styles/BlogDetailModal.css";

const BlogDetailModal = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <img src={post.image} alt={post.title} className="modal-image" />
          <button onClick={onClose} className="close-button">
            ×
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-meta">
            <span className="modal-category">{post.category}</span>
            <span className="modal-read-time">⏱️ {post.readTime}</span>
            <span className="modal-date">
              📅 {new Date(post.date).toLocaleDateString()}
            </span>
          </div>

          <h1 className="modal-title">{post.title}</h1>

          <div className="modal-author">
            <span>👤 {post.author}</span>
          </div>

          <div className="modal-text">
            {post.content.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="modal-tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="tag">
                #{tag}
              </span>
            ))}
          </div>

          <div className="modal-actions">
            <div className="modal-actions-left">
              <button className="modal-action-button">
                ❤️ {post.likes} Likes
              </button>
              <button className="modal-action-button">
                💬 {post.comments} Comments
              </button>
            </div>
            <button className="modal-action-button">📤 Share Article</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailModal;
