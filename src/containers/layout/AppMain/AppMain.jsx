import { Routes, Route } from 'react-router-dom';
import { routes } from '../../../constants/routes';
import PageLayout from '../PageLayout';

import Home from '../../../pages/Home';
import NotFound from '../../../pages/NotFound';

const AppMain = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path={'*'} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppMain;
