import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './NewsItemDetails.css';

const NewsItemDetails = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    const fetchNewsItem = async () => {
      const res = await axios.get(`http://127.0.0.1:8000/api/news/${id}`);
      setNewsItem(res.data);
    };
    fetchNewsItem();
  }, [id]);

  if (!newsItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="title">{newsItem.title}</h1>
      <p className="body">{newsItem.body}</p>
      <p className="tags">Tags: {newsItem.tags.map(tag => tag.name).join(', ')}</p>
      <p className="categories">
        Category: <Link to={`/categories/${newsItem.category.id}`}>{newsItem.category.name}</Link>
      </p>
    </div>
  );
};


export default NewsItemDetails;
