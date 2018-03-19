import React from 'react';
import Loadable from 'react-loadable';

const AsyncHome = Loadable({
  loader: () => import('./Home'),
  loading: <div>Loading...</div>,
  modules: ['./Home'],
  webpack: () => [require.resolveWeak('./Home')],
});

export default AsyncHome;