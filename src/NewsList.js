import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch the list of news items from the API
    const fetchNews = async () => {
      const res = await axios.get('http://127.0.0.1:8000/api/news');
      setNews(res.data);
    };

    fetchNews();
  }, []);

  return (
    <div>
      {news.map(item => (
        <NewsItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NewsList;
