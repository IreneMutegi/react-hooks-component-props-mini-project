import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      {/* Pass the blog name to the Header */}
      <Header name={blogData.name} />

      {/* Pass the image and about text to the About component */}
      <About image={blogData.image} about={blogData.about} />

      {/* Pass the posts array to the ArticleList */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
