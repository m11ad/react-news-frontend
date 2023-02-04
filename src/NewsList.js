import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import NavBar from './NavBar';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch the list of news items from the API
    const fetchNews = async () => {
      const res = await axios.get('http://127.0.0.1:8000/api/news');
      setNews(res.data.reverse());
    };

    fetchNews();
  }, []);

  return (

    <div>
          <NavBar />

      {news.map(item => (
        <NewsItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NewsList;
