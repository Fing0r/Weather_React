import React, { memo } from 'react';

import { Navbar } from '../Navbar/Navbar';

const Appbar = memo(() => {
  return (
    <header className="header">
      <div className="container">
        <Navbar />
      </div>
    </header>
  );
});

export { Appbar };
