import { Wrapper, Content } from './SideMenu.styles';
import CategoriesList from './CategoriesList';

const SideMenu = () => {
  return (
    <Wrapper>
      <Content>
        <CategoriesList />
      </Content>
    </Wrapper>
  );
};

export default SideMenu;
