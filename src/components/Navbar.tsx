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

function Navbar () {

  const breadcrumbs = useBreadcrumbs();

  return (
    <div className='breadcrumbs'>
      {breadcrumbs.map(({ breadcrumb, match }, index) => (
        <div className="bc" >
          <Link to={match || ""}>{breadcrumb}</Link>
          {index < breadcrumbs.length - 1 && " -> "}
        </div>
      ))}
      {<NavLayout/>}
    </div>
  );
}

export default Navbar;