import { Link } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Blogpostpic from "../assets/images/pixel-bg.jpg";
import avatar from "../assets/images/avatar.png";
const Postlist = () => {
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
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                                <div className="card card-small card-post card-post--1">
                                    <div className="card-post__image" style={{backgroundImage: `url(${Blogpostpic})`}}>
                                        <Link className="card-post__category badge badge-pill badge-dark">Business</Link>
                                        <div className="card-post__author d-flex">
                                            <Link to="/" className="card-post__author-avatar card-post__author-avatar--small" style={{backgroundImage: `url(${avatar})`}}>Written by Anna Kunis</Link>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                        <Link to="/" className="text-fiord-blue">Conduct at an replied removal an amongst</Link>
                                        </h5>
                                        <p className="card-text d-inline-block mb-3">However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...</p>
                                        <span className="text-muted">28 February 2019</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                                <div className="card card-small card-post card-post--1">
                                    <div className="card-post__image" style={{backgroundImage: `url(${Blogpostpic})`}}>
                                        <Link to="/" className="card-post__category badge badge-pill badge-info">Travel</Link>
                                        <div className="card-post__author d-flex">
                                            <Link className="card-post__author-avatar card-post__author-avatar--small" style={{backgroundImage:`url(${avatar})`}}>Written by James Jamerson </Link>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <Link to="/" className="text-fiord-blue">Off tears are day blind smile alone had ready</Link>
                                        </h5>
                                        <p className="card-text d-inline-block mb-3">Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...</p>
                                        <span className="text-muted">29 February 2019</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                                <div className="card card-small card-post card-post--1">
                                    <div className="card-post__image" style={{backgroundImage:`url(${Blogpostpic})`}}>
                                        <Link to="/" className="card-post__category badge badge-pill badge-primary">Technology</Link>
                                        <div className="card-post__author d-flex">
                                            <Link to="/" className="card-post__author-avatar card-post__author-avatar--small" style={{backgroundImage:`url(${avatar})`}}>Written by Jimmy Jackson</Link>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <Link to="/" className="text-fiord-blue">Difficult in delivered extensive at direction</Link>
                                        </h5>
                                        <p className="card-text d-inline-block mb-3">Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...</p>
                                        <span className="text-muted">29 February 2019</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                                <div className="card card-small card-post card-post--1">
                                    <div className="card-post__image" style={{backgroundImage:`url(${Blogpostpic})`}}>
                                        <Link to="/" className="card-post__category badge badge-pill badge-warning">Technology</Link>
                                        <div className="card-post__author d-flex">
                                        <Link to="/" className="card-post__author-avatar card-post__author-avatar--small" style={{backgroundImage:`url(${avatar})`}}>Written by John James</Link>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <Link to="/" className="text-fiord-blue">It so numerous if he may outlived disposal</Link>
                                        </h5>
                                        <p className="card-text d-inline-block mb-3">How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...</p>
                                        <span className="text-muted">29 February 2019</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card card-small card-post mb-4">
                                    <div className="card-body">
                                        <h5 className="card-title">Had denoting properly jointure which well books beyond</h5>
                                        <p className="card-text text-muted"> In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer...</p>
                                    </div>
                                    <div className="card-footer border-top d-flex">
                                        <div className="card-post__author d-flex">
                                        <Link to="/" className="card-post__author-avatar card-post__author-avatar--small" style={{backgroundImage: `url(${avatar})`}}>Written by James Khan</Link>
                                        <div className="d-flex flex-column justify-content-center ms-3">
                                            <span className="card-post__author-name">James Khan</span>
                                            <small className="text-muted">21 March 2011</small>
                                        </div>
                                        </div>
                                        <div className="my-auto ms-auto">
                                        <Link to="/" className="btn btn-sm btn-white">
                                            View detail </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card card-small card-post mb-4">
                                    <div className="card-body">
                                        <h5 className="card-title">Had denoting properly jointure which well books beyond</h5>
                                        <p className="card-text text-muted"> In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer...</p>
                                    </div>
                                    <div className="card-footer border-top d-flex">
                                        <div className="card-post__author d-flex">
                                        <Link to="/" className="card-post__author-avatar card-post__author-avatar--small" style={{backgroundImage: `url(${avatar})`}}>Written by James Khan</Link>
                                        <div className="d-flex flex-column justify-content-center ms-3">
                                            <span className="card-post__author-name">James Khan</span>
                                            <small className="text-muted">21 March 2011</small>
                                        </div>
                                        </div>
                                        <div className="my-auto ms-auto">
                                        <Link to="/" className="btn btn-sm btn-white">
                                            View detail </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card card-small card-post mb-4">
                                    <div className="card-body">
                                        <h5 className="card-title">Had denoting properly jointure which well books beyond</h5>
                                        <p className="card-text text-muted"> In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer...</p>
                                    </div>
                                    <div className="card-footer border-top d-flex">
                                        <div className="card-post__author d-flex">
                                        <Link to="/" className="card-post__author-avatar card-post__author-avatar--small" style={{backgroundImage: `url(${avatar})`}}>Written by James Khan</Link>
                                        <div className="d-flex flex-column justify-content-center ms-3">
                                            <span className="card-post__author-name">James Khan</span>
                                            <small className="text-muted">21 March 2011</small>
                                        </div>
                                        </div>
                                        <div className="my-auto ms-auto">
                                        <Link to="/" className="btn btn-sm btn-white">
                                            View detail </Link>
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


export default Postlist;