import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ isAuth }) => {
  return (
    <header>
      <div className="logo">E-Learning</div>

      <div className="link">
        <Link to={"/"}>Home</Link>
        <Link to={"/courses"}>Courses</Link>
        <Link to={"/about"}>About</Link>
        {/*Static Read Articles Page*/}
        <a
          href="/news-app/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
        Read Articles
        </a>
        <Link to={"/youtube-playlists"}>Video Playlists</Link>
        {isAuth ? (
          <Link to={"/account"}>Account</Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;