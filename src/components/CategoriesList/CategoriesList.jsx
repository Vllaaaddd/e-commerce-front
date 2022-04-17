import { useState, useEffect } from 'react';
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
      {loading ? (
        <div>Loading</div>
      ) : (
        categoryItems.map((category) => <div key={category._id}>{category.name}</div>)
      )}
    </div>
  );
};

export default CategoriesList;
