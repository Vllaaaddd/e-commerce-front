import { Wrapper } from './Home.styles';
import HomeSideMenu from './HomeSideMenu';
import HomeMainContent from './HomeMainContent';

const Home = () => {
  return (
    <Wrapper>
      <HomeSideMenu />
      <HomeMainContent />
    </Wrapper>
  );
};

export default Home;
