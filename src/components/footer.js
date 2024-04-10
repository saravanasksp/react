import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
        <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
            <div className='d-flex'>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">About</Link>
                    </li>                    
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Privacy Policy</Link>
                    </li>
                </ul>
            </div>           
            <div className="copyright ms-auto align-self-center"> <Link to="/" rel="nofollow">UI Blog</Link> | Copyright &copy; {new Date().getFullYear()}
              
            </div>
          </footer>
          <HelmetProvider>
            <Helmet>
                <script type="text/babel" src="../assets/scripts/jquery-3.3.1.min.js"></script>
                <script type="text/babel" src="../assets/scripts/bootstrap.bundle.min.js"></script>
                <script type="text/babel" src="../assets/scripts/Chart.min.js"></script>
                <script type="text/babel" src="../assets/scripts/shards.min.js"></script>
                <script type="text/babel" src="../assets/scripts/jquery.sharrre.min.js"></script>	
                <script type="text/babel" src="../assets/scripts/extras.1.1.0.min.js"></script>
                <script type="text/babel" src="../assets/scripts/shards-dashboards.1.1.0.min.js"></script>
                <script type="text/babel" src="../assets/scripts/app/app-blog-overview.1.1.0.js"></script>
            </Helmet>
            </HelmetProvider>
          </div>
    )
}
export default Footer;