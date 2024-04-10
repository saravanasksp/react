import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
const Userprofile = () => {
    return (
        <div>
        <div className="container-fluid">
            <div className="row">
                <Sidebar/>
                <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                    <Navbar/>
                    <div className="main-content-container container-fluid px-4 mb-3">
                        <div className="page-header row no-gutters py-3">
                            <div className="col-12 col-sm-4 text-center text-sm-start mb-0">
                                <span className="text-uppercase page-subtitle">Blog</span>
                                <h3 className="page-title">User Profile</h3>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="nameInput" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="nameInput" placeholder="Name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="user@example.com"/>
                                </div>                                
                                <div className="mb-3">
                                    <label htmlFor="mobileInput" className="form-label">Mobile</label>
                                    <input type="text" className="form-control" id="mobileInput" placeholder="Mobile"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Address</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>                                                              
                                <div className="mb-3">
                                    <label htmlFor="PinInput" className="form-label">Pincode</label>
                                    <input type="text" className="form-control" id="PinInput" placeholder="Pincode"/>
                                </div>
                                <input className="btn btn-primary" type="submit" value="Save"/>
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


export default Userprofile;