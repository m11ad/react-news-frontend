import React from 'react';

const NewsItem = ({ item }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.body}</p>
    </div>
  );
};

export default NewsItem;
