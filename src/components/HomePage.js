import React from "react";
import Navigation from "./Navbar";
import Footer from "./Footer";
import NewsLetter from "./HomePageCOMPONENTS/NewsLetter/NewsLetter";
import Blog from "./HomePageCOMPONENTS/BlogCards/Blog";
// import AboutUsCard from './HomePageCOMPONENTS/AboutUsCard/AboutUsCard'
// import OurCourses from './HomePageCOMPONENTS/OurCourses/OurCourses'
// import UpcomingEvents from './HomePageCOMPONENTS/UpcomingEvents/UpcomingEvents'
import OneOnOne from "./HomePageCOMPONENTS/OneOnOneCard/OneOnOne";
// import Features from './HomePageCOMPONENTS/Features/Features'
import Message from "./HomePageCOMPONENTS/Message/Message";
import Table from "./HomePageCOMPONENTS/Table/Table";
import StoryGist from "./HomePageCOMPONENTS/StoryGist/StoryGist";
import Testimonials from "./HomePageCOMPONENTS/Testimonials/Testimonials";

// import Results from "./Results";

// import Expertise from "./HomePageCOMPONENTS/ExpertiseSection/Expertise";


const HomePage = () => {
  return (
    <div>


      <Navigation />
      {/* <Results /> */}
      <NewsLetter />
      <StoryGist />
      <OneOnOne />
      <Table />
      <Testimonials />
      <Blog />
      {/* <Features /> */}
      {/* <OurCourses /> */}
      {/* <UpcomingEvents /> */}
      <Message />
      {/* <AboutUsCard /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
