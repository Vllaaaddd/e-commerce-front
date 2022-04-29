import { Wrapper } from './Home.styles';
import SideMenu from './SideMenu';
import MainContent from './MainContent';

const Home = () => {
  return (
    <Wrapper>
      <SideMenu />
      <MainContent />
    </Wrapper>
  );
};

export default Home;
