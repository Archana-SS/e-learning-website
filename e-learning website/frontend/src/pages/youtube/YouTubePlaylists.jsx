/*import React from "react";
import "./YouTubePlaylists.css"; // Create this file if needed for styling

const playlists = [
  {
    title: "Playlist 1",
    id: "PLrL_PSQ6q062cD0vPMGYW_AIpNg6T0_Fq"
  },
  {
    title: "Playlist 2",
    id: "PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI"
  },
  {
    title: "Playlist 3",
    id: "PLmXKhU9FNesSjFbXSZGF8JF_4LVwwofCd"
  },
  {
    title: "Playlist 4",
    id: "PLISTUNloqsz0z9JJJke7g7PxRLvy6How9"
  }
];

const YouTubePlaylists = () => {
  return (
    <div className="playlist-container">
      <h1>Learning Playlists</h1>
      {playlists.map((playlist, index) => (
        <div key={index} className="playlist-box">
          <h2>{playlist.title}</h2>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/videoseries?list=${playlist.id}`}
            title={playlist.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default YouTubePlaylists;*/




/*import React, { useState } from "react";
import "./YouTubePlaylists.css";

const playlists = [
  {
    title: "DBMS Playlist",
    id: "PLrL_PSQ6q062cD0vPMGYW_AIpNg6T0_Fq",
    description: "Master DBMS concepts and practical queries.In-depth DBMS tutorials on relational models, SQL, normalization, and transactions."
  },
  {
    title: "Operating system Playlist",
    id: "PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI",
    description: "Comprehensive lessons covering OS concepts like processes, memory management, file systems, and concurrency for a solid understanding of operating systems.Comprehensive lessons covering OS concepts, processes, memory, and more."
  },
  {
    title: "Computer Networks Playlist",
    id: "PLmXKhU9FNesSjFbXSZGF8JF_4LVwwofCd",
    description: "In-depth lessons on network protocols and models.Fundamentals of computer networking, protocols, OSI model, TCP/IP, and more."
  },
  {
    title: "OOPs Playlist",
    id: "PLISTUNloqsz0z9JJJke7g7PxRLvy6How9",
    description: "Detailed tutorials on OOP principles including classes, objects, inheritance, polymorphism, encapsulation, and abstraction with practical coding examples."
  },
];

const YouTubePlaylists = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlaylists = playlists.filter(({ title, description }) =>
    title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="playlist-container">
      <h1>Learning Playlists</h1>

      <input
        type="text"
        placeholder="Search playlists by course name or description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {filteredPlaylists.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#888" }}>
          No playlists found.
        </p>
      ) : (
        filteredPlaylists.map((playlist, index) => (
          <div key={index} className="playlist-box">
            <h2>{playlist.title}</h2>
            <p>{playlist.description}</p>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/videoseries?list=${playlist.id}`}
              title={playlist.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ))
      )}
    </div>
  );
};

export default YouTubePlaylists;*/


import React, { useState, useEffect } from "react";
import "./YouTubePlaylists.css";

const playlists = [
  {
    title: "Database Management System (DBMS) Playlist",
    id: "PLrL_PSQ6q062cD0vPMGYW_AIpNg6T0_Fq",
    description:
      "Master DBMS concepts and practical queries.In-depth DBMS tutorials on relational models, SQL, normalization, and transactions.",
  },
  {
    title: "Operating system (OS) Playlist",
    id: "PLrL_PSQ6q0606tibu0c9lFIzkFtshv7HI",
    description:
      "Comprehensive lessons covering OS concepts like processes, memory management, file systems, and concurrency for a solid understanding of operating systems.Comprehensive lessons covering OS concepts, processes, memory, and more.",
  },
  {
    title: "Computer Networks (CN) Playlist",
    id: "PLmXKhU9FNesSjFbXSZGF8JF_4LVwwofCd",
    description:
      "In-depth lessons on network protocols and models.Fundamentals of computer networking, protocols, OSI model, TCP/IP, and more.",
  },
  {
    title: "Object Oriented Programming (OOPs) Playlist",
    id: "PLISTUNloqsz0z9JJJke7g7PxRLvy6How9",
    description:
      "Detailed tutorials on OOP principles including classes, objects, inheritance, polymorphism, encapsulation, and abstraction with practical coding examples.",
  },
];

const YouTubePlaylists = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    // Load from localStorage or default false
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const filteredPlaylists = playlists.filter(
    ({ title, description }) =>
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`playlist-container ${darkMode ? "dark" : "light"}`}>
      <nav className="navbar">
        <div className="nav-title">E-Learning Playlists</div>
        <button
          className="mode-toggle"
          onClick={() => setDarkMode((prevMode) => !prevMode)}
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>

      <h1>Master Your Skills with These Playlists</h1>

      <input
        type="text"
        placeholder="Search playlists by course name or description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {filteredPlaylists.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#888" }}>
          No playlists found.
        </p>
      ) : (
        filteredPlaylists.map((playlist, index) => (
          <div key={index} className="playlist-box">
            <h2>{playlist.title}</h2>
            <p>{playlist.description}</p>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/videoseries?list=${playlist.id}`}
              title={playlist.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ))
      )}
      <div className="disclaimer">
        <p>
          Note: All video content is embedded directly from YouTube. All copyrights and content rights belong to the original creators and YouTube.
        </p>
      </div>
    </div>
  );
};

export default YouTubePlaylists;

