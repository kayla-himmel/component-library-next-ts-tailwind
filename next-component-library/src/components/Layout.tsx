import React from 'react';

const contentH1 = 'This is the default title';
const contentP =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const Layout = () => {
  return (
    <div>
      <h1>{contentH1}</h1>
      <p>{contentP}</p>
    </div>
  );
};

export default Layout;
