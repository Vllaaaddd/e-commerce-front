import { useState, useEffect } from 'react';
import Loader from '../Loader';
import useAxios from '../../hooks/use-axios';
import { categoryService } from '../../services/category-service';
import { config } from './variables';

const CategoriesList = () => {
  const [categoryItems, setCategoryItems] = useState([]);
  const { response, loading, fetchData } = useAxios();

  useEffect(() => {
    fetchData({ service: categoryService.getByTypes, config });
  }, [fetchData]);

  useEffect(() => {
    if (response) {
      setCategoryItems(response.data);
    }
  }, [response]);

  return (
    <div>
      <Loader loading={loading}>
        {categoryItems.map((category) => (
          <div key={category._id}>{category.name}</div>
        ))}
      </Loader>
    </div>
  );
};

export default CategoriesList;
