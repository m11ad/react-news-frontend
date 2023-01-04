import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  // use the useParams hook to access the route parameters
  const { categoryId } = useParams();
  // state to store the category and news items for the category
  const [category, setCategory] = useState(null);
  const [news, setNews] = useState([]);

  // fetch the category and news items when the component mounts
  useEffect(() => {
    const fetchCategory = async () => {
      const res = await axios.get(`http://127.0.0.1:8000/api/categories/${categoryId}`);
      setCategory(res.data);
      setNews(res.data.news);
    };
    fetchCategory();
  }, [categoryId]);

  return (
    <div>
      <h1>{category ? category.name : 'Loading...'}</h1>
      {news.map(item => (
        <NewsItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CategoryPage;
