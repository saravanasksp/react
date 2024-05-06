import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
const Postlist = () => {
    const blogpostdata = useSelector(state => state.products);
    useEffect(() => {
      console.log('Component mounted!',blogpostdata); 
    }, [blogpostdata]);
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
                                <span className="text-uppercase page-subtitle">Components</span>
                                <h3 className="page-title">Blog Posts</h3>
                            </div>
                        </div>
                        <div className="row">
                            {blogpostdata.blogpost.map(product =>(
                            <div key={product.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">                                
                                <div className="card card-small card-post card-post--1">
                                    <div className="card-post__image" style={{backgroundImage: `url(${product.cardpostimg})`}}>
                                        <Link className="card-post__category badge badge-pill badge-dark">{product.catagoryname}</Link>
                                        <div className="card-post__author d-flex">
                                            <Link to="/" className="card-post__author-avatar card-post__author-avatar--small" style={{backgroundImage:`url(${product.avatarimg})`}}></Link>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                        <Link to="/" className="text-fiord-blue">{product.blogpostname}</Link>
                                        </h5>
                                        <p className="card-text d-inline-block mb-3">{product.blogpostdesc}</p>
                                        <span className="text-muted">{product.datemodified}</span>
                                    </div>                               
                                </div>
                            </div>
                            ))}
                        </div>
                        <div className="row">
                            {blogpostdata.bloglist.map(product =>(
                            <div key={product.id} className="col-lg-4">
                                <div className="card card-small card-post mb-4">
                                    <div className="card-body">
                                        <h5 className="card-title">{product.blogpostname}</h5>
                                        <p className="card-text text-muted">{product.blogpostdesc}</p>
                                    </div>
                                    <div className="card-footer border-top d-flex">
                                        <div className="card-post__author d-flex">
                                        <Link to="/" className="card-post__author-avatar card-post__author-avatar--small" style={{backgroundImage: `url(${product.avatarimg})`}}></Link>
                                        <div className="d-flex flex-column justify-content-center ms-3">
                                            <span className="card-post__author-name">{product.username}</span>
                                            <small className="text-muted">{product.username}</small>
                                        </div>
                                        </div>
                                        <div className="my-auto ms-auto">
                                        <Link to="/" className="btn btn-sm btn-white">
                                            {product.buttonname} </Link>
                                        </div>
                                    </div>
                                </div>                            
                            </div>
                            ))}
                        </div>
                    </div>
                <Footer/>
                </main>
            </div>
        </div>
    </div>
    )
}


export default Postlist;