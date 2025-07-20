import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import CategoryFilter from "./CategoryFilter";
import BlogCard from "./BlogCard";
import BlogDetailModal from "./BlogDetailModal";
import { blogPosts, categories } from "../data/blogPosts";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    let filtered = blogPosts;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [selectedCategory, searchTerm]);

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="home">
      <Hero />
      <main className="main-content">
        {/* <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />{" "}
        } */}
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} onReadMore={handleReadMore} />
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <div className="no-posts">
            <p>No posts found matching your criteria.</p>
          </div>
        )}
      </main>
      {selectedPost && (
        <BlogDetailModal post={selectedPost} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Home;
