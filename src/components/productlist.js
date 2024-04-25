import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
const ProductList = () => {
  const updateprod = useSelector(state => state.products);
  console.log('products:', updateprod);
  

  useEffect(() => {
    console.log('Component mounted!',updateprod);
  }, []);
    return (
        <div>

            <div className="container-fluid">
                <div className="row">
                <Sidebar/>
                <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                    <Navbar/>
                    <div className="main-content-container container-fluid px-4">
                        <div className="page-header row no-gutters py-4">
                            <div className="col-12 col-sm-4 text-center text-sm-start mb-0">
                                <span className="text-uppercase page-subtitle">Dashboard</span>
                                <h3 className="page-title">Blog Overview</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                                <div className="stats-small stats-small--1 card card-small">
                                    <div className="card-body p-0 d-flex">
                                    <h1>Product Data</h1>
                                    {/* Render array data */}
                                    <ul>
                                      {updateprod.productsdata.map(product =>(
                                        <li key={product.id}>
                                         <div> <img src={product.name} alt={product.name}/>{product.name}</div>
                                          <div>{product.price}</div>
                                        </li>
                                      ))}
                                    </ul>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                <Footer/>
                </main>
            </div>
        </div>
    </div>
    )

  }

export default ProductList