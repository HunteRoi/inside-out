
import { createBrowserRouter } from 'react-router-dom';
import { Outlet, RouterProvider } from 'react-router';
import 'antd/dist/reset.css';

import Home from './smart-components/Home';
import Sickness from './smart-components/Sickness';
import Layout from './dumb-components/Layout';
import NotFound from './dumb-components/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/sickness',
        element: <Outlet />,
        children: [
          { path: '', element: <NotFound />},
          { path: ':name', element: <Sickness /> }
        ]
      }
    ]
  }
], { basename: '/inside-out' });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
