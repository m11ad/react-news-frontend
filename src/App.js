import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryPage from './CategoryPage';
import NewsList from './NewsList';
import NewsItemDetails from './NewsItemDetails';

function App() {
  return (
    <div>
  <Router>
    <Routes>
      <Route path="/" element={<NewsList />} />
      <Route path="/categories/:categoryId" element={<CategoryPage />} />
      <Route path="/news/:id" element={<NewsItemDetails />} />
    </Routes>
  </Router> 
  </div>

  );
}

export default App;