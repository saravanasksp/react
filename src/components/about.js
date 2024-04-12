import Footer from "./footer"
import BannerBgImg1 from "../images/pixel-bg.jpg";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <div className="container mt-3 about-page">
                <div className="row">
                    <div className="card bg-dark-overlay-4 overflow-hidden card-bg-scale h-400 text-center" style={{backgroundImage: `url(${BannerBgImg1})`, backgroundPosition: 'center left',backgroundSize: 'cover'}}>
                        <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                            <div className="w-100 my-auto subheading">
                                <h1 className="text-white">About us</h1>
                                <nav className="d-flex justify-content-center" aria-label="breadcrumb">
                                    <ol className="breadcrumb breadcrumb-dots mb-0">
                                        <li className="breadcrumb-item"><Link to="/"><i className="bi bi-house me-1"></i> Home</Link></li>
                                        <li className="breadcrumb-item active">About us</li>
                                    </ol>
                                </nav>      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="pt-4 pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h2 className="text-black">Our story</h2>
                            <p className="lead">
                                Founded in 2006, passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or
                                perfectly. Is drew am hill from me. Valley by oh twenty direct me so.
                            </p>
                            <p>
                                Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. Large above be to means. Dashwood does provide stronger is. Warrant private blushes removed an in equally totally if. Delivered
                                dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. ...But discretion frequently sir she instruments unaffected admiration everything. Meant balls it if up doubt small purse. Required
                                his you put the outlived answered position. A pleasure exertion if believed provided to. All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne
                                in. I think on style child of. Servants moreover in sensible it ye possible. Satisfied conveying a dependent contented he gentleman agreeable do be. Water timed folly right aware if oh truth. Imprudence attachment him
                                his for sympathize. Large above be to means. Dashwood does provide stronger is. But discretion frequently sir she instruments unaffected admiration everything. Meant balls it if up doubt small purse. Required his you put
                                the outlived answered position. I think on style child of. Servants moreover in sensible it ye possible. Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in
                                equally totally if. Delivered dejection necessary objection do Mr prevailed. Required his you put the outlived answered position. A pleasure exertion if believed provided to. All led out world this music while asked.
                                Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in. I think on style child of. Servants moreover in sensible it ye possible.
                            </p>
                            <h3 className="mt-4 text-black">We do this across:</h3>
                            <ul>
                                <li>A pleasure exertion if believed provided to. All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in.</li>
                                <li>Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.</li>
                                <li>
                                    Mr feeling does chiefly cordial in do. <Link to="/"><u>Water timed folly right aware if oh truth.</u></Link> Imprudence attachment him his for sympathize. Large above be to means.
                                </li>
                                <li>Dashwood does provide stronger is. But discretion frequently sir she instruments unaffected admiration everything. Meant balls it if up doubt small purse.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
export default About