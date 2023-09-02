import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { routerConfig } from '../config/routerConfig';

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routerConfig).map(({ element, path }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export { AppRouter };
