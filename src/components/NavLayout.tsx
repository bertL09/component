import { Route, RouteObject } from 'react-router-dom';
import { Link, useRoutes} from 'react-router-dom';
import Gallery from './Gallery';
import Deserts from './Deserts';
import ErrorPage from './ErrorPage';
import App from '../App';

function NavLayout () {

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
          <Link to="/deserts">
            <i className="fa fa-truck"></i>
            <span className="nav-text">Deserts</span>
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

export default NavLayout;