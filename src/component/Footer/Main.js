import React from 'react'
import { Link } from 'react-router-dom'
import BGImg from "../../assets/img/bg/footer-bg.png";

const Main = () => {
  return (
    <>
        <footer className="footer-bg footer-p">
            <div className="footer-top  pt-90 pb-40" style={{background_color: "#644222", backgroundImage: `url(${BGImg})`}}>
                <div className="container">
                    <div className="row justify-content-between">                          
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title mb-30">
                                   <img src="assets/img/logo/logo.png" alt="img" />
                                </div>
                                <div className="f-contact">
                                    <ul>
                                        <li>
                                            <i className="icon fal fa-phone"></i>
                                            <span>0245 368 964<br/>+40-787-342-190</span>
                                        </li>
                                        <li>
                                            <i className="icon fal fa-envelope"></i>
                                            <span>
                                                <Link to="#">info@alexrelax.com</Link><br/>
                                                <Link to="#">help@alexrelax.com</Link>
                                            </span>
                                        </li>
                                        <li>
                                            <i className="icon fal fa-map-marker-check"></i>
                                            <span>Strada Cernăuți, nr. 2A<br/> Bran</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
						<div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h2>Pagini</h2>
                                </div>
                                <div className="footer-link">
                                    <ul>                                        
                                        <li><Link to="/">Hotel</Link></li>
                                        <li><Link to="/about">Despre noi</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/blog">Blog</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h2>Serviciile noastre</h2>
                                </div>
                                <div className="footer-link">
                                    <ul>
                                        <li><Link to="/gallery">Galerie</Link></li>
                                        <li><Link to="/room">Camere</Link></li>
                                        <li><Link to="#">Politica de prelucrare a datelor cu caracter personal</Link></li>
                                        <li><Link to="/service">Facilități</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>  
                        {/* <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                  <h2>Subscribe To Our Newsletter</h2>
                                </div>
                                <div className="footer-link">
                                <p>Subscribe our newsletter to get our latest update &amp; News</p>
                                    <div className="subricbe p-relative" data-animation="fadeInDown" data-delay=".4s" >
                                        <form action="news-mail.php" method="post" className="contact-form ">
                                            <input type="text" id="email2" name="email2"  className="header-input" placeholder="Your Email..." required />
                                            <button className="btn header-btn"> <i className="fas fa-location-arrow"></i> </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">                         
                           Copyright &copy; AlexRelax 2021 . Toate drepturile rezervate. Creat de <b><Link to="#" style={{color:"white"}}>WebAppDynamicx</Link></b>      
                        </div>
                        <div className="col-lg-6 col-md-6 text-right text-xl-right">                       
                           <div className="footer-social">                                    
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Main
