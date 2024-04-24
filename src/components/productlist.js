
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import Sidebar from "./sidebar";
import Navbar from "./navbar";
const ProductList = () => {
  const updateprod = useSelector(state => state.products);
  useEffect(() => {
    
    // Custom logic to execute when component mounts
    console.log('Component mounted!',updateprod);

    // You can add any other logic here
    // Example: fetching data, subscribing to events, etc.
  }, []);
  return (
    <div>
            <div className="container-fluid">
                <div className="row">
                <Sidebar/>
                <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                    <Navbar/>
                    <div className="main-content-container container-fluid px-4">
                      <h1>Hello</h1>
                      <p></p>
                      </div>
                </main>
                </div>
                </div>
                </div>
  )
}

export default ProductList;