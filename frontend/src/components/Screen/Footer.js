import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4 offset-1 col-sm-2">
                    <h5 style={{marginTop: "3rem"}}>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to='/home' className="f-links">Home</Link></li>
                        <li><Link to='/aboutus' className="f-links">About Us</Link></li>
                        <li><Link to='/contactus' className="f-links">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5 style={{marginTop: "3rem"}}>Our Address</h5>
                    <address>
		              NH- 24 , Khoda Colony <br />
                        Near Sector 62 , Noida <br />
                        Uttar Pradesh, India <br />
                        <i className="fa fa-phone"></i> : +91 7302238567<br />
		              <i className="fa fa-envelope"></i> : <a href="mailto:momohsin046@gmail.com" className="f-links">momohsin046@gmail.com</a>
		           </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a href="http://google.com/" className="f-icons"><i className="fab  fa-google  fa-large"></i></a>
                        <a href="http://www.facebook.com/profile.php?id=" className="f-icons"><i className="fab fa-facebook  fa-large"></i></a>
                        <a href="http://twitter.com/" className="f-icons"><i className="fab fa-twitter fa-large"></i></a>
                        <a href="http://youtube.com/" className="f-icons"><i className="fab fa-youtube fa-large"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="f-base">
                    <p>© Copyright 2021 - All right reserved :- EasySpot </p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;
