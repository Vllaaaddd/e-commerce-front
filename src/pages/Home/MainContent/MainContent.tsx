import { Wrapper } from './MainContent.styles';
import Products from './Products';
import Slider from './Slider';

const MainContent = () => {
  return (
    <Wrapper>
      <Slider />
      <Products />
    </Wrapper>
  );
};

export default MainContent;
