import * as React from 'react';
import type { RouteObject } from 'react-router-dom';
import { Outlet, Link, useRoutes, useParams, Route, useMatch } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import Gallery from './Gallery';
import Home from './Home';
import Booking from './Booking';
import App from '../App';
import "./css/Navbar.css";

const Navbar = () => {
  let routes: RouteObject[] = [
    {
      path: '/',
      element: <NavLayout />,
      children: [
        { index: true, element: <App /> },
        { path: '/booking', index: true, element: <Booking /> },
        { path: '/gallery', index: true, element: <Gallery /> },
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

function NavLayout() {

  return (
    <nav className="main-menu">
      <ul>
        <li className="main_menu_item">
          <Link to="/">
            <i className="fa fa-home fa-lg"></i>
            <span className="nav-text">Home</span>
          </Link>
        </li>
        <li className="main_menu_item">
          <Link to="/booking">
            <i className="fa fa-truck"></i>
            <span className="nav-text">Booking</span>
          </Link>
        </li>
        <li id="li_gallery" className="main_menu_item">
          <Link to="/gallery" >
            <i className="fa fa-camera-retro"></i>
            <span className="nav-text">Galllery</span>
          </Link>
          <ul className='submenu'>
            <li className="submenu_item">
              <Link to="/gallery/sb1">
                <i className="fa fa-truck"></i>
                <span className="nav-text">subpage 1</span>
              </Link>
            </li>
            <li className="submenu_item">
              <Link to="/gallery/sb2">
                <i className="fa fa-truck"></i>
                <span className="nav-text">subpage 2</span>
              </Link>
            </li>
            <li className="submenu_item">
              <Link to="/gallery/sb3">
                <i className="fa fa-truck"></i>
                <span className="nav-text">subpage 3</span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;