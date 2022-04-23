import { useState, useEffect } from 'react';
import { Wrapper, Content, CategoryWrapper, IconWrapper } from './CategoriesList.styles';
import Loader from '../Loader';
import useAxios from '../../hooks/use-axios';
import { categoryService } from '../../services/category-service';
import { config } from './variables';
import { Icon } from '@iconify/react';

const CategoriesList = () => {
  const [categoryItems, setCategoryItems] = useState([]);
  const icons = [
    <Icon icon='ant-design:laptop-outlined' />,
    <Icon icon='bi:phone' />,
    <Icon icon='ion:game-controller-outline' />,
    <Icon icon='icon-park-outline:washing-machine-one' />,
    <Icon icon='cil:sofa' />,
    <Icon icon='uil:drill' />,
    <Icon icon='la:bath' />,
    <Icon icon='lucide:shovel' />,
    <Icon icon='mdi:racquetball' />,
    <Icon icon='ph:t-shirt' />,
    <Icon icon='icon-park-outline:perfume' />,
    <Icon icon='ri:bear-smile-line' />,
    <Icon icon='cil:paw' />,
    <Icon icon='akar-icons:book' />,
    <Icon icon='la:glass-martini-alt' />,
    <Icon icon='ic:outline-barcode' />
  ];
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
    <Wrapper>
      <Loader loading={loading}>
        <Content>
          {categoryItems.map((category, index) => (
            <CategoryWrapper key={category._id}>
              {console.log(index)}
              <IconWrapper>{icons[index]}</IconWrapper>
              <span>{category.name}</span>
            </CategoryWrapper>
          ))}
        </Content>
      </Loader>
    </Wrapper>
  );
};

export default CategoriesList;
