import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.scss';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Home from './components/home';
import Addnewpost from './components/addnewpost';
import Postlist from "./components/postlist";
import Userprofile from "./components/userprofile";
import Login from "./components/login";
import { useSelector } from 'react-redux';

function App() {
  const tokenvalue = useSelector(state => state.authToken);
  let isAuthenticated = false
  if(tokenvalue) {
    isAuthenticated = true
  }
    return (
      <>
      <Router>
            <Routes>
              <Route path="/" element={isAuthenticated ? <Navigate replace to="/home" /> : <Login />} />
              <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate replace to="/" />} />
              <Route path="/postlist" element={<Postlist />} />
              <Route path="/addnewpost" element={<Addnewpost />} />
              <Route path="/userprofile" element={<Userprofile />} />
              {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
        </Router>
      </>
    );
}

export default App;
