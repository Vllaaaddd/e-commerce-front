import { Routes, Route } from 'react-router-dom';
import { routes } from '../../constants/routes';

import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';

const RoutesLayout = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
};

export default RoutesLayout;
