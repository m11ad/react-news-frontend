import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
    <div>
      <h1>{newsItem.title}</h1>
      <p>{newsItem.body}</p>
      <p>By {newsItem.author}</p>
    </div>
  );
};

export default NewsItemDetails;
