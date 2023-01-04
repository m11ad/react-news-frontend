import React from 'react';
import { Link } from 'react-router-dom';
import './NewsItem.css';

const NewsItem = ({ item }) => {
  return (
    <div className="news-item">
      <Link to={`/news/${item.id}`}>
        <h2>{item.title}</h2>
      </Link>
      <p>{item.body}</p>
    </div>
  );
};

export default NewsItem;
