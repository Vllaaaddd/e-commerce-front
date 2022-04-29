import { Wrapper } from './MainContent.styles';
import ProductList from './ProductList';
import Slider from './Slider';

const MainContent = () => {
  return (
    <Wrapper>
      <Slider />
      <ProductList />
    </Wrapper>
  );
};

export default MainContent;
