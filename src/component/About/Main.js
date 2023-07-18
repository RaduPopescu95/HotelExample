import { Link } from 'react-router-dom'
import React from 'react'
import BGImg from "../../assets/img/slider/bg_sections_1.png";
import About from "../../assets/img/bg/an-img-02.png"
import About1 from "../../assets/img/features/about_img_02.png"
import About2 from "../../assets/img/features/about_img_03.png"
import About3 from "../../assets/img/features/signature.png"

const Main = () => {
  return (
    <>
        <main>
            <section className="breadcrumb-area d-flex align-items-center" style={{ background : `url(${BGImg})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-center">
                                <div className="breadcrumb-title">
                                    <h2>About</h2>    
                                    <div className="breadcrumb-wrap">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to ="/">Home</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">About</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-area about-p pt-120 pb-120 p-relative fix">
                <div className="animations-02"><img src={About} alt="contact-bg-an-02"/></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s">
                                <img src={About1} alt="img"/>   
                                <div className="about-icon">
                                    <img src={About2} alt="img"/>   
                                </div>
                            </div>
                        </div>
					    <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="about-content s-about-content  wow fadeInRight  animated pl-30" data-animation="fadeInRight" data-delay=".4s">
                                <div className="about-title second-title pb-25">  
                                    <h5>Despre noi</h5>
                                    <h2>Cel mai sigur și apreciat hotel.</h2>                                   
                                </div>
                                   <p>Bine ați venit la hotelul nostru de lux, un loc deosebit în care veți experimenta rafinamentul și confortul suprem. Situat într-o locație pitorească, hotelul nostru vă oferă camere elegante și spațioase, amenajate cu gust și dotate cu facilități moderne. Indiferent dacă sunteți în călătorie de afaceri sau într-o vacanță relaxantă, vă veți bucura de servicii impecabile, personal amabil și o gamă largă de facilități, cum ar fi un centru spa, piscină interioară și restaurante rafinate.</p>
                                    <p>Savurați preparate culinare delicioase, creații ale bucătarilor noștri talentați, și bucurați-vă de o gamă variată de activități recreative și de agrement. Indiferent de motivele călătoriei dvs., vă garantăm că veți avea o experiență memorabilă și relaxantă la hotelul nostru de lux.</p>
                                    <div className="about-content3 mt-30">
                                    <div className="row justify-content-center align-items-center">
                                    <div className="col-md-12">
                                        <ul className="green mb-30">                                              
                                            <li> Acces la pârtii de schi</li>
                                            <li> Spa și centru de wellness</li>     
                                            <li> Piscină și/sau jacuzzi</li>
                                            <li> Restaurant și bar</li>
                                            <li> Săli de conferințe și evenimente</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="slider-btn">                                          
                                            <Link to="/about" className="btn ss-btn smoth-scroll">Descoperă mai mult</Link>				
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <div className="signature">
                                            <img src={About3} alt="img"/>                                             
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section id="skill" className="skill-area p-relative fix" style={{background:"#291d16"}}>
                <div className="animations-01"><img src="assets/img/bg/an-img-05.png" alt="contact-bg-an-05"/></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
					   <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="skills-content s-about-content">
                                <div className="skills-title pb-20">                               
                                    <h5>Rio We Use</h5>
                                    <h2>
                                    We Offer Wide Selection of Hotel
                                    </h2>                             
                                </div>
                                <p>Vestibulum non ornare nunc. Maecenas a metus in est iaculis pretium. Aliquam ullamcorper nibh lacus, ac suscipit ipsum consequat porttitor.</p>
                                <div className="skills-content s-about-content mt-20">
                                    <div className="skills">
                                        <div className="skill mb-30">
                                        <div className="skill-name">Qulity Production</div>
                                        <div className="skill-bar">
                                            <div className="skill-per" id="80" style={{width: "80%"}}></div>
                                        </div>
                                        </div>
                                        <div className="skill mb-30">
                                        <div className="skill-name">Maintenance Services</div>
                                        <div className="skill-bar">
                                            <div className="skill-per" id="90" style={{width: "90%"}}></div>
                                        </div>
                                        </div>
                                        <div className="skill mb-30">
                                        <div className="skill-name">Product Managment</div>
                                        <div className="skill-bar">
                                            <div className="skill-per" id="70" style={{width: "70%"}}></div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 pr-30">
                            <div className="skills-img wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s">                              
                                <img src="assets/img/bg/skills-img.png" alt="img" className="img"/>              
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="feature-area2 p-relative fix" style={{background: "#f7f5f1"}}>
                 <div className="animations-02"><img src="assets/img/bg/an-img-02.png" alt="contact-bg-an-05"/></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 pr-30">
                           <div className="feature-img">                               
                                <img src="assets/img/features/feature.png" alt="img" className="img"/>              
                            </div>
                        </div>
					   <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="feature-content s-about-content">
                                <div className="feature-title pb-20">                               
                                    <h5>AlexRelax</h5>
                                <h2>
                                 Pearla Carpaților.
                                </h2>                             
                                </div>
                                <p>Serile sunt rezervate pentru experiențe culinare rafinate în restaurantele noastre elegante. Bucurați-vă de preparatele delicioase pregătite cu pasiune și talent de bucătarii noștri, care folosesc cele mai proaspete ingrediente locale și internaționale. Indiferent dacă sunteți în căutarea unei mese romantice sau a unui prânz de afaceri, veți găsi opțiuni pe placul dumneavoastră.</p>
                                <p>Cu personalul nostru dedicat și atent la detalii, vă garantăm că veți avea o experiență memorabilă și relaxantă la hotelul nostru de lux. Fiecare detaliu este gândit pentru a vă oferi o ședere plăcută și senzațională. Indiferent de motivele călătoriei dvs., vă invităm să vă bucurați de rafinamentul și luxul oferite de hotelul nostru, creând amintiri de neuitat.</p>
                                <div className="slider-btn mt-15">                                          
                                    {/* <Link to ="/about" className="btn ss-btn smoth-scroll">Discover More</Link>				 */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section id="blog" className="blog-area p-relative fix pt-90 pb-90">
                 <div className="animations-02"><img src="assets/img/bg/an-img-06.png" alt="contact-bg-an-05"/></div>
                <div className="container">
                    <div className="row align-items-center"> 
                        <div className="col-lg-12">
                            <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                 <h5>Our Blog</h5>
                                <h2>
                                    Latest Blog & News
                                </h2>
                                <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                       <div className="col-lg-4 col-md-6">
                            <div className="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                <div className="blog-thumb2">
                                    <Link to ="/blog-details"><img src="assets/img/blog/inner_b1.jpg" alt="img"/></Link>
                                </div>                    
                                <div className="blog-content2">    
                                    <div className="date-home">
                                        24th March 2022
                                    </div>
                                    <h4><Link to ="/blog-details">Cras accumsan nulla nec lacus ultricies placerat.</Link></h4> 
                                    <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.</p>
                                    <div className="blog-btn"><Link to ="/blog-details">Read More</Link></div>
                                     
                                </div>
                            </div>
                        </div>
                         <div className="col-lg-4 col-md-6">
                            <div className="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                <div className="blog-thumb2">
                                    <Link to ="/blog-details"><img src="assets/img/blog/inner_b2.jpg" alt="img"/></Link>
                                </div>
                                <div className="blog-content2">                                    
                                    <div className="date-home">
                                       24th March 2022
                                    </div>
                                    <h4><Link to ="/blog-details">Dras accumsan nulla nec lacus ultricies placerat.</Link></h4> 
                                    <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.</p>
                                    <div className="blog-btn"><Link to ="/blog-details">Read More</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                <div className="blog-thumb2">
                                    <Link to ="/blog-details"><img src="assets/img/blog/inner_b3.jpg" alt="img"/></Link>
                                </div>
                                <div className="blog-content2">                                    
                                    <div className="date-home">
                                        24th March 2022
                                    </div>
                                    <h4><Link to ="/blog-details">Seas accumsan nulla nec lacus ultricies placerat.</Link></h4> 
                                    <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.</p>
                                    <div className="blog-btn"><Link to ="/blog-details">Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <section className="newslater-area p-relative pt-120 pb-120" style= {{background: "#f7f5f1"}}>
                <div className="animations-01"><img src="assets/img/bg/an-img-07.png" alt="contact-bg-an-05"/></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center text-center">
                        <div className="col-xl-9 col-lg-9">
                            <div className="section-title center-align mb-40 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                 <h5>Newsletter</h5>
                                <h2>
                                    Get Best Offers On The Hotel
                                </h2>
                                <p>With the subscription, enjoy your favourite Hotels without having to think about it</p>
                            </div>
                            <form name="ajax-form" id="contact-form4" action="#" method="post" className="contact-form newslater">
                               <div className="form-group">
                                  <input className="form-control" id="email3" name="email" type="email" placeholder="Your Email Address" value="" required=""/> 
                                  <button type="submit" className="btn btn-custom" id="send2">Subscribe Now</button>
                               </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section> */}
        </main>
    </>
  )
}

export default Main