import * as React from 'react';
import type { RouteObject } from 'react-router-dom';
import { Link, useRoutes} from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import Gallery from './Gallery';
import Deserts from './Deserts';
import App from '../App';
import "./Navbar.css";
import NavLayout from './NavLayout';
import ErrorPage from './ErrorPage';

const Navbar = () => {
  let routes: RouteObject[] = [
    {
      path: '/',
      element: <NavLayout />,
      children: [
        { index: true, element: <App /> },
        { path: '/deserts', index: true, element: <Deserts /> },
        { path: '/gallery', index: true, element: <Gallery /> },
        { path: '/*', index: true, element: <ErrorPage /> }
      ],
    },
  ];

  let element = useRoutes(routes);
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className='breadcrumbs'>
      {breadcrumbs.map(({ breadcrumb, match }, index) => (
        <div className="bc" >
          <Link to={match || ""}>{breadcrumb}</Link>
          {index < breadcrumbs.length - 1 && " -> "}
        </div>
      ))}
      {element}
    </div>
  );
}

export default Navbar;