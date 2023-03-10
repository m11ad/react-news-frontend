import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import NavBar from './NavBar';


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
      setCategory(res.data.category);
      setNews(res.data.news);
    };
    
    fetchCategory();
  }, [categoryId]);

  return (
    <div>
            <NavBar currentCategory={category} />

      {news ? news.map(item => (
        <NewsItem key={item.id} item={item} />
      )) : 'Loading...'}
    </div>
  );
};

export default CategoryPage;
