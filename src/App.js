import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryPage from './CategoryPage';
import NewsList from './NewsList';
import NewsItem from './NewsItem';

function App() {
  return (
    <div>
  <Router>
    <Routes>
      <Route path="/" element={<NewsList />} />
      <Route path="/categories/:categoryId" element={<CategoryPage />} />
    </Routes>
  </Router> 
  </div>

  );
}

export default App;