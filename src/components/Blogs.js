import React from "react";
import Navbar from "./Navbar";
import "./Blogs.css";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import leftarrow from "../assets/leftarrow.svg";
// import rightarrow from "../assets/rightarrow.svg";
// import featureimage from "../assets/featuredarticle-image.png";
// import articleimage from "../assets/article-image.png";
// import BlogCategoryCard from "./BlogCategoryCard";
import Subscribe from "./Subscribe";
// import BlogCard from "./BlogCard";
import Footer from "./Footer";
// import GetBlogs from "../data/GetBlogs";
// import Results from "./HomePageCOMPONENTS/Results/Results";

function Blogs() {
  // setBlogList();
  // let blogList = GetBlogs();
  // console.log(blogList);
  return (
    <div className="blogpage">
      <Navbar />
      <div className="container blog-container intro-container">
        {/* <BlogDataCollector /> */}
        <Subscribe
          heading="Welcome to Storygiri's Blog"
          description="Explore a World of Inspiration, Growth, and Wellbeing with Our Thought-Provoking Blogs"
        />
      </div>

      {/* <div className="category-container">
        <h2>Explore Various Categories</h2>
        <div className="carousel-container">
          <div className="left-arrow">
            <img className="arrow" src={leftarrow} alt="left"></img>
          </div>
          <div className="carousel">
            {blogList.map((e) => {
              return (
                <BlogCategoryCard
                  title={e.categories}
                  desc="consectetur adipiscing elit"
                />
              );
            })}
          </div>
          <div className="right-arrow">
            <img className="arrow" src={rightarrow} alt="right"></img>
          </div>
        </div>
      </div> */}

      {/* <div className="feature-section">
        <h2>Featured Article</h2>
        {blogList.length > 0 ? (
          <div className="feature-container">
            <div
              className="feature-image"
              style={{ backgroundImage: "url(" + blogList[0].thumbURL + ")" }}
            ></div>
            <div className="feature-content">
              <div className="category-mark">{blogList[0].categories[0]}</div>
              <h4>{blogList[0].title}</h4>
              <p>{blogList[0].description}</p>
              <Link to={`/blogs/${blogList[0].title}`}>
                <div className="secondary-btn readmore-btn">Browse Content</div>
              </Link>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div> */}

      <div className="recent-articles-section">
        {/* <h2>Recent Articles</h2>
        <div className="articles-container">
          {blogList.map((e) => {
            return (
              <BlogCard
                image={e.thumbURL}
                categories={e.categories}
                title={e.title}
                desc={e.description}
              />
            );
          })}
        </div> */}

        {/* <Subscribe
          heading="Liked our Blogs?"
          description="Stay Up to Date on Your Journey to Success with Our Newsletter Subscription"
        /> */}
        <Subscribe
          heading="Blogs are on the way!"
          description="Stay Up to Date on Your Journey to Success with Our Newsletter Subscription"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;
