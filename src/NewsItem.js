import React from 'react';
import './NewsItem.css';

const NewsItem = ({ item }) => {
  return (
    <div className="news-item">
      <h2>{item.title}</h2>
      <p>{item.body}</p>
    </div>
  );
};

export default NewsItem;
