/*import React, { useEffect, useState } from 'react';
import './ReadArticles.css';

const ReadArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = 'cad98a8db46f49cdaa204639bd8162a2'; // Replace with your NewsAPI key
  const url = `https://newsapi.org/v2/top-headlines?country=in&category=education&apiKey=${apiKey}`;

  //const url = "https://newsapi.org/v2/everything?q=";
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="news-container">
      <h1>📚 Educational News Articles</h1>
      {loading ? (
        <p>Loading articles...</p>
      ) : (
        <div className="articles">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} className="article-image" />
              )}
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReadArticles;*/
