import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Footer() {
  return (
    <>
      <div className="impl_footer_wrapper">
        <div className="impl_social_wrapper">
          <ul>
            <li className="marreduce">
              <Link  to="/">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-google-plus" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-rss" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-pinterest-p" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="impl_foo_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="impl_foo_box footer_abt_text">
                  <a href="index.html">
                    {/* <img src="assets/images/logo.png" alt=""></img> */}
                    Car Reselling Logo
                  </a>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable by injected humour.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="impl_foo_box">
                  <h1 className="impl_foo_title">Basic Information</h1>
                  <ul>
                    <li>
                      <a href="#0">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        Changing Oil
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        Saving Fuel
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        Antilock Brakes
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        Battery
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        Tips On Long Car Trips
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        Air Pressure
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        Tire Replacement
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="impl_foo_box">
                  <h1 className="impl_foo_title">contact us</h1>
                  <ul>
                    <li>
                      <div className="impl_foo_icon">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                      </div>
                      <div className="impl_foo_text">
                        <p>+1-202-555-0137</p>
                        <p>+1-202-555-0137</p>
                      </div>
                    </li>
                    <li>
                      <div className="impl_foo_icon">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                      </div>
                      <div className="impl_foo_text">
                        <p>
                          514 S. Magnolia St.
                          <br /> Orlando , US
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="impl_foo_icon">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                      </div>
                      <div className="impl_foo_text">
                        <a href="#0">dummymail@mail.com</a>
                        {/* <a href="#">yourmail@mail.com</a> */}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="impl_foo_box">
                  <h1 className="impl_foo_title">Subscribe </h1>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                  <div className="impl_footer_subs">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Email"
                    />
                    <button className="foo_subs_btn">
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="impl_btm_footer footer_query">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <p className="impl_copyright">
                Copyright &copy; 2022 Reselling Car Dealers. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
