import Footer from "./footer"
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div>
            <div className="container contact-form mt-3">
                <div className="row">
                    <div className="col-md-9 mx-auto text-center subheading">
                        <h1 className="text-black">Contact Form</h1>
                        <nav className="d-flex justify-content-center" aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-dots mb-0">
                                <li className="breadcrumb-item"><Link to="/"><i className="bi bi-house me-1"></i> Home</Link></li>
                                <li className="breadcrumb-item active">Contact us</li>
                            </ol>
                        </nav>      
                    </div>
                </div>
                <div className="col-xl-9 mx-auto">
                    <hr className="my-3" />
                    <div className="row mb-3 mb-lg-5">
                        <div className="col-12">
                            <h2>Contact us</h2>
                            <p>Please fill in the form below and we will contact you very soon. Your email address will not be published.</p>
                            <form className="contact-form" id="contact-form" name="contactform" method="POST">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <input name="name" type="text" className="form-control shadow-none" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <input name="email" type="email" className="form-control shadow-none" placeholder="E-mail" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <input name="subject" type="text" className="form-control shadow-none" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <textarea name="message" cols="40" rows="6" className="form-control shadow-none" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-start"><button className="btn btn-primary w-100" type="submit">Send Message</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}
export default Contact