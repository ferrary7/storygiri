import React from "react";
import { useNavigate } from "react-router-dom";
import "./Features.css";
import ooo from "../../../assets/ooo.svg";
import blogs from "../../../assets/blogs.svg";
import events from "../../../assets/events.svg";
import videos from "../../../assets/videos.svg";
import courses from "../../../assets/courses.svg";

const Features = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "10rem", backgroundColor: "white" }}>
      <div
        className="featuresContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10rem",
          paddingBottom: "10rem",
        }}
      >
        <div style={{ borderRadius: "50%", width: "200px", height: "200px" }}>
          {/* <Link to='/ooo'> */}
          <img
            src={ooo}
            alt="Circle 1"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/ooo");
            }}
          />
          {/* </Link> */}
          <h2 style={{ textAlign: "center" }}>Book a 1-1 Call</h2>
        </div>
        <div style={{ borderRadius: "50%", width: "200px", height: "200px" }}>
          {/* <Link to='/blogs'> */}
          <img
            src={blogs}
            alt="Circle 2"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/blogs");
            }}
          />
          {/* </Link> */}
          <h2 style={{ textAlign: "center" }}>Blogs</h2>
        </div>
        <div style={{ borderRadius: "50%", width: "200px", height: "200px" }}>
          {/* <Link to='/events'> */}
          <img
            src={events}
            alt="Circle 3"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/events");
            }}
          />
          {/* </Link> */}
          <h2 style={{ textAlign: "center" }}>Events</h2>
        </div>
      </div>
      <div
        className="featuresContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10rem",
        }}
      >
        <div style={{ borderRadius: "50%", width: "200px", height: "200px" }}>
          {/* <Link to='/videos'> */}
          <img
            src={videos}
            alt="Circle 4"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/videos");
            }}
          />
          {/* </Link> */}
          <h2 style={{ textAlign: "center" }}>Videos</h2>
        </div>
        <div style={{ borderRadius: "50%", width: "200px", height: "200px" }}>
          {/* <Link to='/courses'> */}
          <img
            src={courses}
            alt="Circle 5"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/courses");
            }}
          />
          {/* </Link> */}
          <h2 style={{ textAlign: "center" }}>Courses</h2>
        </div>
      </div>
    </div>
  );
};

export default Features;
