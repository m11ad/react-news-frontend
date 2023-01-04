import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import NewsList from './NewsList';
import CategoryPage from './CategoryPage';
import NewsItemDetails from './NewsItemDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewsList />} />
        <Route path="/categories/:categoryId" element={<CategoryPage />} />
        <Route path="/news/:id" element={<NewsItemDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
