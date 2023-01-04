import React from 'react';
import { Link } from 'react-router-dom';
import './NewsItem.css';

const NewsItem = ({ item }) => {
  return (
    <div className="container">
      <Link to={`/news/${item.id}`}>
        <h2 className="title">{item.title}</h2>
      </Link>
      <p className="body">{item.body}</p>
    </div>
  );
};

export default NewsItem;
