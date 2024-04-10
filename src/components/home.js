import { Link } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
const Main = () => {
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
                            <div className="col-lg col-md-6 col-sm-6 mb-4">
                                <div className="stats-small stats-small--1 card card-small">
                                    <div className="card-body p-0 d-flex">
                                        <div className="d-flex flex-column m-auto">
                                            <div className="stats-small__data text-center">
                                                <span className="stats-small__label text-uppercase">Posts</span>
                                                <h6 className="stats-small__value count my-3">2,390</h6>
                                            </div>
                                            <div className="stats-small__data">
                                                <span className="stats-small__percentage stats-small__percentage--increase">4.7%</span>
                                            </div>
                                        </div>
                                        <canvas height="120" className="blog-overview-stats-small-1"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg col-md-6 col-sm-6 mb-4">
                                <div className="stats-small stats-small--1 card card-small">
                                    <div className="card-body p-0 d-flex">
                                        <div className="d-flex flex-column m-auto">
                                            <div className="stats-small__data text-center">
                                                <span className="stats-small__label text-uppercase">Pages</span>
                                                <h6 className="stats-small__value count my-3">182</h6>
                                            </div>
                                            <div className="stats-small__data">
                                                <span className="stats-small__percentage stats-small__percentage--increase">12.4%</span>
                                            </div>
                                        </div>
                                        <canvas height="120" className="blog-overview-stats-small-2"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg col-md-4 col-sm-6 mb-4">
                                <div className="stats-small stats-small--1 card card-small">
                                    <div className="card-body p-0 d-flex">
                                        <div className="d-flex flex-column m-auto">
                                            <div className="stats-small__data text-center">
                                                <span className="stats-small__label text-uppercase">Comments</span>
                                                <h6 className="stats-small__value count my-3">8,147</h6>
                                            </div>
                                            <div className="stats-small__data">
                                                <span className="stats-small__percentage stats-small__percentage--decrease">3.8%</span>
                                            </div>
                                        </div>
                                        <canvas height="120" className="blog-overview-stats-small-3"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg col-md-4 col-sm-6 mb-4">
                                <div className="stats-small stats-small--1 card card-small">
                                    <div className="card-body p-0 d-flex">
                                        <div className="d-flex flex-column m-auto">
                                            <div className="stats-small__data text-center">
                                                <span className="stats-small__label text-uppercase">Users</span>
                                                <h6 className="stats-small__value count my-3">2,413</h6>
                                            </div>
                                            <div className="stats-small__data">
                                                <span className="stats-small__percentage stats-small__percentage--increase">12.4%</span>
                                            </div>
                                        </div>
                                        <canvas height="120" className="blog-overview-stats-small-4"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg col-md-4 col-sm-12 mb-4">
                                <div className="stats-small stats-small--1 card card-small">
                                    <div className="card-body p-0 d-flex">
                                        <div className="d-flex flex-column m-auto">
                                            <div className="stats-small__data text-center">
                                                <span className="stats-small__label text-uppercase">Subscribers</span>
                                                <h6 className="stats-small__value count my-3">17,281</h6>
                                            </div>
                                            <div className="stats-small__data">
                                                <span className="stats-small__percentage stats-small__percentage--decrease">2.4%</span>
                                            </div>
                                        </div>
                                        <canvas height="120" className="blog-overview-stats-small-5"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card text-center">
                                <div className="card-header ">
                                    <span className="badge text-bg-info fs-5">Featured</span>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <Link to="/" className="btn btn-primary">Go somewhere</Link>
                                </div>
                                <div className="card-footer text-body-secondary">
                                    2 days ago
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


export default Main;