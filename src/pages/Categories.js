import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import '../styles/Categories.scss';

function Categories() {
  const dispatch = useDispatch();
  const categoryHandler = (text) => {
    dispatch(checkStatus(text));
  };

  const selector = useSelector((state) => state.allCategories);
  return (
    <div className="categoriesContainer">
      <button type="button" onClick={() => categoryHandler('Work in Progress')}>Check Status</button>
      <h1>{selector}</h1>
    </div>
  );
}

export default Categories;
