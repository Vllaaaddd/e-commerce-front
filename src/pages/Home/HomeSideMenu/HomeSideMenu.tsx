import { Wrapper, Content } from './HomeSideMenu.styles';
import CategoriesList from './CategoriesList';

const HomeSideMenu = () => {
  return (
    <Wrapper>
      <Content>
        <CategoriesList />
      </Content>
    </Wrapper>
  );
};

export default HomeSideMenu;
