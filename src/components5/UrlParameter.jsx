import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  console.log('location:' + search);
  const query = new URLSearchParams(search);
  console.log(query);

  return (
    <div>
      <h1>UrlParameterです</h1>
      <p>パラメーターは{id}です</p>
      <p>クエリは{query.get('name')}です</p>
    </div>
  );
};
