import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import axios from 'axios';


const NavBar = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get('http://127.0.0.1:8000/api/categories');
      setCategories(res.data.categories);
    };
    fetchCategories();
  }, []);

  return (
    <nav>
      <div>
      <Link to="/">Home</Link>
      {props.currentCategory && (
        <span>
          {"->"}
          <Link to={`/categories/${props.currentCategory.id}`}>
            {props.currentCategory.name}
          </Link>
        </span>
      )}
      </div>
            <div className="dropdown">
        <button className="dropbtn">Categories</button>
        <div className="dropdown-content">
          {categories.map(category => (
            <Link key={category.id} to={`/categories/${category.id}`}>
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
