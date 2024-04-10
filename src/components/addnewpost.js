import { Link } from "react-router-dom";
import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Editortoolbar, { modules, formats } from "./editorToolbar"
const Addnewpost = () => {
    const [state, setState] = React.useState({ value: null });
    const handleChange = value => {
      setState({ value });
    };
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
                                <span className="text-uppercase page-subtitle">Blog Posts</span>
                                <h3 className="page-title">Add New Post</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-9 col-md-12">
                                <div className="card card-small mb-3">
                                    <div className="card-body">
                                        <form className="add-new-post">
                                            <input className="form-control form-control-lg mb-3" type="text" placeholder="Your Post Title" />
                                        </form>
                                        <Editortoolbar />
                                        <ReactQuill
                                            theme="snow"
                                            value={state.value}
                                            onChange={handleChange}
                                            placeholder={"Write something awesome..."}
                                            modules={modules}
                                            formats={formats}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <div className="card card-small mb-3">
                                    <div className="card-header border-bottom">
                                        <h6 className="m-0">Actions</h6>
                                    </div>
                                    <div className="card-body p-0">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item p-3">
                                                <span className="d-flex mb-2">
                                                    <i className="material-icons me-1">flag</i>
                                                    <strong className="me-1">Status:</strong> Draft
                                                    <Link to="/" className="ms-auto">Edit</Link>
                                                </span>
                                                <span className="d-flex mb-2">
                                                    <i className="material-icons me-1">visibility</i>
                                                    <strong className="me-1">Visibility:</strong>
                                                    <strong className="text-success">Public</strong>
                                                    <Link to="/" className="ms-auto">Edit</Link>
                                                </span>
                                                <span className="d-flex mb-2">
                                                    <i className="material-icons me-1">calendar_today</i>
                                                    <strong className="me-1">Schedule:</strong> Now
                                                    <Link to="/" className="ms-auto">Edit</Link>
                                                </span>
                                                <span className="d-flex">
                                                    <i className="material-icons me-1">score</i>
                                                    <strong className="me-1">Readability:</strong>
                                                    <strong className="text-warning">Ok</strong>
                                                </span>
                                            </li>
                                            <li className="list-group-item d-flex px-3">
                                                <button className="btn btn-sm btn-outline-accent"><i className="material-icons">save</i> Save Draft</button>
                                                <button className="btn btn-sm btn-accent ms-auto"><i className="material-icons">file_copy</i> Publish</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card card-small mb-3">
                                    <div className="card-header border-bottom">
                                        <h6 className="m-0">Categories</h6>
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="form-checkbox">
                                            <div className="form-check ms-4 mt-2">
                                                <input className="form-check-input shadow-none" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Uncategorized
                                                </label>
                                            </div>
                                            <div className="form-check ms-4 mt-2">
                                                <input className="form-check-input shadow-none" type="checkbox" value="" id="flexCheckChecked" defaultChecked/>
                                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                                Design
                                                </label>
                                            </div>
                                            <div className="form-check ms-4 mt-2">
                                                <input className="form-check-input shadow-none" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Development
                                                </label>
                                            </div>
                                            <div className="form-check ms-4 mt-2">
                                                <input className="form-check-input shadow-none" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Writing
                                                </label>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item d-flex px-3">
                                                    <div className="input-group">
                                                    <input type="text" className="form-control" placeholder="New category" aria-label="Add new category" aria-describedby="basic-addon2"/>
                                                    <div className="input-group-append">
                                                        <button className="btn btn-white px-2" type="button">
                                                        <i className="material-icons">add</i>
                                                        </button>
                                                    </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
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


export default Addnewpost;