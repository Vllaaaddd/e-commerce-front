import { useState, useEffect } from 'react';
import useAxios from '../../hooks/use-axios';
import { categoryService } from '../../services/category-service';
import { config } from './variables';

const CategoriesList = () => {
  const [categoryItems, setCategoryItems] = useState([]);
  const { response, loading } = useAxios({
    service: categoryService.getByTypes,
    config
  });

  useEffect(() => {
    if (response) {
      setCategoryItems(response.data);
    }
  }, [response]);

  console.log(categoryItems);
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
