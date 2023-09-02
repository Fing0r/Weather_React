import React, { Suspense } from 'react';

import { AppRouter } from '@/app/providers/router';
import { Appbar } from '@/widget/Appbar';

import '@/app/styles/App.css';

const App = () => {
  return (
    <div className="app">
      <Suspense fallback="">
        <Appbar />
        <div className="content-page">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export { App };
