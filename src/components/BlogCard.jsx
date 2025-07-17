import React from 'react';
import '../styles/BlogCard.css';

const BlogCard = ({ post, onReadMore }) => {
  return (
    <article className="blog-card">
      <img src={post.image} alt={post.title} className="blog-card-image" />
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span className="category-tag">{post.category}</span>
          <span className="read-time">⏱️ {post.readTime}</span>
        </div>
        
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        
        <div className="blog-card-info">
          <div className="author-info">
            <span className="author">👤 {post.author}</span>
            <span className="date">📅 {new Date(post.date).toLocaleDateString()}</span>
          </div>
          <button
            onClick={() => onReadMore(post)}
            className="read-more-button"
          >
            Read More →
          </button>
        </div>
        
        <div className="blog-card-actions">
          <div className="actions-left">
            <button className="action-button">
              ❤️ {post.likes}
            </button>
            <button className="action-button">
              💬 {post.comments}
            </button>
          </div>
          <button className="action-button">
            📤 Share
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;