import avatar from '../assets/images/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
///import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import '../assets/styles/shards-dashboards.1.1.0.min.css'
import '../assets/styles/extras.1.1.0.min.css'
import '../assets/styles/quill.snow.css'
import { Link } from "react-router-dom";
//import { useLocation } from "react-router-dom";


const Navbar = () => {
  // const tokenid = localStorage.getItem("tokenid")
  // const location = useLocation();
  // let logintext;
  // if (tokenid) {
  //     logintext =  <Link to={location.pathname} onClick={() => localStorage.setItem('tokenid','')}>Logout</Link>
  // } else {
  //   logintext = <Link to="/login">Login</Link>
  // }
  // console.log('ttt',location.pathname)
    return (
        <div className="main-navbar sticky-top bg-white">
            <nav className="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
              <form action="#0" className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
                <div className="input-group input-group-seamless ms-3">
                  <div className="input-group-prepend d-flex">
                    <div className="input-group-text">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                  </div>
                  <input className="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search"/> 
                  </div>
              </form>
              <ul className="navbar-nav border-left flex-row">
                <li className="nav-item border-right dropdown notifications">
                    <Link className="nav-link nav-link-icon text-center" to="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="nav-link-icon__wrapper">
                      <i className="material-icons">&#xE7F4;</i>
                      <span className="badge badge-pill badge-danger">33</span>
                    </div>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-small" aria-labelledby="dropdownMenuLink">
                    <Link className="dropdown-item" to="/">
                      <div className="notification__icon-wrapper">
                        <div className="notification__icon">
                          <i className="material-icons">&#xE6E1;</i>
                        </div>
                      </div>
                      <div className="notification__content">
                        <span className="notification__category">Analytics</span>
                        <p>Your website’s active users count increased by
                          <span className="text-success text-semibold">28%</span> in the last week. Great job!</p>
                      </div>
                    </Link>
                    <Link className="dropdown-item" to="/">
                      <div className="notification__icon-wrapper">
                        <div className="notification__icon">
                          <i className="material-icons">&#xE8D1;</i>
                        </div>
                      </div>
                      <div className="notification__content">
                        <span className="notification__category">Sales</span>
                        <p>Last week your store’s sales count decreased by
                          <span className="text-danger text-semibold">5.52%</span>. It could have been worse!</p>
                      </div>
                    </Link>
                    <Link className="dropdown-item notification__all text-center" to="/"> View all Notifications </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle text-nowrap px-3" data-bs-toggle="dropdown" to="/" role="button" aria-haspopup="true" aria-expanded="false">
                    <img className="user-avatar rounded-circle mr-2" src={avatar} alt="User Avatar"/>
                    <span className="d-none d-md-inline-block ms-1">Sierra Brooks</span>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-small">
                      <Link className="dropdown-item" to="/"><i className="material-icons">&#xE7FD;</i> Profile</Link>
                      <Link className="dropdown-item" to="/"><i className="material-icons">vertical_split</i> Blog Posts</Link>
                      <Link className="dropdown-item" to="/"><i className="material-icons">note_add</i> Add New Post</Link>
                    
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item text-danger" to="/">
                        <i className="material-icons text-danger">&#xE879;</i> Login
                    </Link>
                  </div>
                </li>
              </ul>
              <nav className="nav">
                <Link className="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left" to="/" data-bs-toggle="collapse" data-bs-target=".main-sidebar" aria-expanded="false" aria-controls="main-sidebar">
                  <i className="material-icons">&#xE5D2;</i>
                </Link>
              </nav>
            </nav>
          </div>
    )
}
export default Navbar;