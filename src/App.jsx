import { useContext, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import RoutesLayout from './components/RoutesLayout';
import { Context } from './context';
import { getFromLocalStorage } from './services/local-storage-service';
import { USER_TOKENS } from './constants/config';

const App = () => {
  const { userStore } = useContext(Context);

  useEffect(() => {
    if (getFromLocalStorage(USER_TOKENS.ACCESS_TOKEN)) {
      userStore.checkAuth();
    }
  }, [userStore]);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <RoutesLayout />
      </BrowserRouter>
    </>
  );
};

export default App;
