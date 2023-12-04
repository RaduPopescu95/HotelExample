import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Main = () => {
  const [mobile, setmobile] = useState(false);
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);
  const [show4, setshow4] = useState(false);

  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    window.scroll(0, 0);
  }, [path]);

  return (
    <>
      <header className="header-area header-three">
        <div className="header-top second-header d-none d-md-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-10 col-md-10 d-none d-lg-block">
                <div className="header-cta">
                  <ul>
                    {/* <li>
                                            <i className="far fa-clock"></i>
                                            <span>Mon - Fri: 9:00 - 19:00/ Closed on Weekends</span>
                                        </li> */}
                    <li>
                      <i className="far fa-mobile"></i>
                      <strong>+40 787999323</strong>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 d-none d-lg-block text-right">
                <div className="header-social">
                  <span>
                    <Link to="#" title="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="#" title="LinkedIn">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link to="#" title="Twitter">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="#" title="Twitter">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="header-sticky" className="menu-area">
          <div className="container">
            <div className="second-menu">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2">
                  <div className="logo">
                    <Link to="/">
                      <img src="assets/img/logo/logo.png" alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8">
                  <div className="main-menu text-center">
                    <nav id="mobile-menu ">
                      <ul>
                        <li className="has-sub">
                          <Link to="/">Hotel</Link>
                          {/* <ul>
                                                        <li><Link to="/">Home Page 01</Link></li>
                                                        <li><Link to="/home-02">Home Page 02</Link></li>
                                                        <li><Link to="/home-03">Home Page Side Menu</Link></li>
                                                        <li><Link to="/home-04">Home Page Full Menu</Link></li>
                                                    </ul> */}
                        </li>
                        <li className="has-sub">
                          <Link to="/about">Despre noi</Link>
                        </li>
                        <li className="has-sub">
                          <Link to="/room">Camere</Link>
                          {/* <ul>
                                                        <li> <Link to="/room">Our Rooms</Link></li>
                                                        <li> <Link to="/room-details">Rooms Details</Link></li>
                                                    </ul> */}
                        </li>
                        <li className="has-sub">
                          <Link to="/service">facilități</Link>
                          {/* <ul>
                                                        <li> <Link to="/service">Services</Link></li>
                                                        <li> <Link to="/service-details">Services Details</Link></li>
                                                    </ul> */}
                        </li>
                        <li className="has-sub">
                          <Link to="/gallery">Galerie</Link>
                        </li>
                        {/* <li className="has-sub"><Link to="#">Pages</Link>
                                                    <ul>
                                                        <li><Link to="/gallery">Gallery</Link></li>
                                                        <li><Link to="/faq">Faq</Link></li>
                                                        <li><Link to="/team">Team</Link></li>
                                                        <li><Link to="/team-details">Team Details</Link></li>
                                                        <li><Link to="/pricing">Pricing</Link></li>
                                                        <li><Link to="/shop">Shop</Link></li>
                                                        <li><Link to="/shop-details">Shop Details</Link></li>
                                                    </ul>
                                                </li> */}
                        {/* <li className="has-sub">
                                                    <Link to="/blog">Blog</Link>
                                                    <ul>
                                                        <li><Link to="/blog">Blog</Link></li>
                                                        <li><Link to="/blog-details">Blog Details</Link></li>
                                                    </ul>
                                                </li> */}
                        <li className="has-sub">
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                  <Link to="/room" className="top-btn mt-10 mb-10">
                    Rezervă
                  </Link>
                </div>
                <div className="col-12">
                  <div className="mobile-menu mean-container">
                    <div className="mean-bar">
                      <Link
                        to="#nav"
                        className={`meanmenu-reveal ${mobile && "meanclose"}`}
                        onClick={() =>
                          setmobile(mobile === true ? false : true)
                        }
                        style={{
                          right: "0px",
                          left: "auto",
                          textAlign: "center",
                          textIndent: "0px",
                          fontSize: "18px",
                        }}
                      >
                        {mobile ? (
                          "X"
                        ) : (
                          <>
                            <span>
                              <span>
                                <span></span>
                              </span>
                            </span>
                          </>
                        )}
                      </Link>
                      <nav className="mean-nav">
                        {mobile && (
                          <ul style={{ display: mobile ? "block" : "none" }}>
                            <li className="has-sub">
                              <Link to="/">Hotel</Link>
                              {/* <ul style={{ display: show ? "block" : "none" }}>
                                                            <li><Link to="/">Home Page 01</Link></li>
                                                            <li><Link to="/home-02">Home Page 02</Link></li>
                                                            <li><Link to="/home-03">Home Page Side Menu</Link></li>
                                                            <li><Link to="/home-04">Home Page Full Menu</Link></li>
                                                        </ul> */}
                              {/* <Link to="#" className={`mean-expand ${show && "mean-clicked"}`}  onClick = {() => setshow(show === true ? false : true)} style={{ fontSize: "18px" }}>{show ? "-" : "+" }</Link> */}
                            </li>
                            <li className="has-sub">
                              <Link to="/about">Despre noi</Link>
                            </li>
                            <li className="has-sub">
                              <Link to="/room">Camere</Link>
                              {/* <ul style={{ display: show1 ? "block" : "none" }}>
                                                            <li> <Link to="/room">Our Rooms</Link></li>
                                                            <li> <Link to="/room-details">Rooms Details</Link></li>
                                                        </ul> */}
                            </li>
                            <li className="has-sub">
                              <Link to="/service">facilități</Link>
                            </li>
                            <li className="has-sub">
                              <Link to="/gallery">Galerie</Link>
                            </li>
                            <li className="has-sub">
                              {" "}
                              <li className="has-sub">
                                {/* <Link to="/gallery">Galerie</Link> */}
                              </li>
                              {/* <ul style={{ display: show3 ? "block" : "none" }}>
                                                            <li><Link to="/gallery">Gallery</Link></li>
                                                            <li><Link to="/faq">Faq</Link></li>
                                                            <li><Link to="/team">Team</Link></li>
                                                            <li><Link to="/team-details">Team Details</Link></li>
                                                            <li><Link to="/pricing">Pricing</Link></li>
                                                            <li><Link to="/shop">Shop</Link></li>
                                                            <li><Link to="/shop-details">Shop Details</Link>
                                                            </li></ul> */}
                              <Link
                                to="#"
                                className={`mean-expand ${
                                  show3 && "mean-clicked"
                                }`}
                                onClick={() =>
                                  setshow3(show3 === true ? false : true)
                                }
                                style={{ fontSize: "18px" }}
                              >
                                {show3 ? "-" : "+"}
                              </Link>
                            </li>
                            <li className="has-sub">
                              {/* <Link to="/blog/">Blog</Link> */}
                              {/* <ul style={{ display: show4 ? "block" : "none" }}>
                                                            <li><Link to="/blog/">Blog</Link></li>
                                                            <li><Link to="/blog-details/">Blog Details</Link></li>
                                                        </ul> */}
                              <Link
                                to="#"
                                className={`mean-expand ${
                                  show4 && "mean-clicked"
                                }`}
                                onClick={() =>
                                  setshow4(show4 === true ? false : true)
                                }
                                style={{ fontSize: "18px" }}
                              >
                                {show4 ? "-" : "+"}
                              </Link>
                            </li>
                            {/* <li className="mean-last"><Link to="/contact">Contact</Link></li> */}
                          </ul>
                        )}
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Main;
