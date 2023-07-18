import { Link } from 'react-router-dom'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import React , { useState } from 'react'
import BGVImg from "../../../assets/img/bg/video-bg.png";
import BGImg from "../../../assets/img/slider/our_rooms_bg.png";
import FsLightbox from 'fslightbox-react';
import service1 from "../../../assets/img/gallery/room-img01.png"
import service2 from "../../../assets/img/gallery/room-img02.png"
import service3 from "../../../assets/img/gallery/room-img03.png"
import service4 from "../../../assets/img/gallery/room-img04.png"
import icon1 from "../../../assets/img/icon/sve-icon1.png"
import icon2 from "../../../assets/img/icon/sve-icon2.png"
import icon3 from "../../../assets/img/icon/sve-icon3.png"
import icon4 from "../../../assets/img/icon/sve-icon4.png"
import icon5 from "../../../assets/img/icon/sve-icon5.png"
import icon6 from "../../../assets/img/icon/sve-icon6.png"
import "../../../App.css"


const Main = () => {
    const [yShow, setyShow] = useState()
    const [toggler, setToggler] = useState(false);


    const [img, setImg] = useState()
    const [img1, setImg1] = useState()
    const [img2, setImg2] = useState()
    const [img3, setImg3] = useState()
    const [img4, setImg4] = useState()
    const [img5, setImg5] = useState()
    
    const [activeImage , setActiveImage] = useState(1)

    const [images , setImages] = useState([
   
        'assets/img/gallery/room-img01.png',
        'assets/img/gallery/room-img02.png',
        'assets/img/gallery/room-img03.png',
        'assets/img/gallery/room-img04.png',
        'assets/img/gallery/room-img05.png',
        'assets/img/gallery/room-img06.png'
	])


  return (
    <>
        <main>
            <section className="breadcrumb-area d-flex align-items-center" style={{background : `url(${BGImg})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-center">
                                <div className="breadcrumb-title">
                                    <h2>Camere</h2>    
                                    <div className="breadcrumb-wrap">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to="/">Hotel</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Camere</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </section>
            <section id="services" className="services-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-4 col-md-6">
                            <div className="single-services mb-30">
                                <div className="services-thumb">
									<Link to="#" className="gallery-link popup-image" onClick={() => { 
                                    setToggler(!toggler)
                                    setActiveImage(1)
                                }}>
                                    <img src={service1} alt="img" />
									</Link>
                                </div>
                                <div className="services-content"> 
                                    <div className="day-book">
                                        <ul>
                                            <li>200 RON/Noapte</li>
                                            <li><ScrollLink   className="scroll-link" to="bookingId" smooth={true} duration={500} >Rezervă acum</ScrollLink></li>
                                        </ul>
                                    </div>
                                    <h4><Link to="/room-details">Cameră dublă standard</Link></h4>    
                                    <p>Dotată cu un pat dublu confortabil și lenjerii curate, camera dublă standard vă asigură un somn odihnitor. Cu un design simplu, oferă un mediu primitor și relaxant pentru oaspeți.</p>
                                    <div className="icon">
                                        <ul>
                                            <li><img src={icon1} alt="img"/></li>
                                            <li><img src={icon2} alt="img"/></li>
                                            <li><img src={icon3} alt="img"/></li>
                                            <li><img src={icon4} alt="img"/></li>
                                            <li><img src={icon5} alt="img"/></li>
                                            <li><img src={icon6} alt="img"/></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="single-services mb-30">
                                <div className="services-thumb">
									<Link to="#" className="gallery-link popup-image" onClick={() => { 
                                    setToggler(!toggler)
                                    setActiveImage(2)
                                }}>
                                    
                                    <img src={service2} alt="img"/>
									</Link>
                                </div>
                                <div className="services-content"> 
                                    <div className="day-book">
                                        <ul>
                                            <li>250 RON/Noapte</li>
                                            <li><ScrollLink   className="scroll-link" to="bookingId" smooth={true} duration={500} >Rezervă acum</ScrollLink></li>                                        </ul>
                                    </div>
                                    <h4><Link to="/room-details">Cameră dublă superioară</Link></h4>    
                                    <p>Dotată cu un pat dublu mare și confortabil, lenjerii luxoase și perne moi, camera dublă superioară vă va oferi o experiență de somn odihnitoare și plăcută.</p>
                                    <div className="icon">
                                        <ul>
                                            <li><img src={icon1} alt="img"/></li>
                                            <li><img src={icon2} alt="img"/></li>
                                            <li><img src={icon3} alt="img"/></li>
                                            <li><img src={icon4} alt="img"/></li>
                                            <li><img src={icon5} alt="img"/></li>
                                            <li><img src={icon6} alt="img"/></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="single-services mb-30">
                                <div className="services-thumb">
									<Link to="#" className="gallery-link popup-image" onClick={() => { 
                                    setToggler(!toggler)
                                    setActiveImage(3)
                                }} >
                                    <img src={service3} alt="img"/>
									</Link>
                                </div>
                                <div className="services-content"> 
                                    <div className="day-book">
                                        <ul>
                                            <li>350 RON/Noapte</li>
                                            <li><ScrollLink   className="scroll-link" to="bookingId" smooth={true} duration={500} >Rezervă acum</ScrollLink></li>                                        </ul>
                                    </div>
                                    <h4><Link to="/room-details">Camera dublă cu balcon</Link></h4>    
                                    <p>Camera dublă cu balcon oferă o experiență unică. Dotată cu un pat dublu confortabil, această cameră dispune de un balcon privat, unde vă puteți bucura de priveliști spectaculoase. </p>
                                    <div className="icon">
                                        <ul>
                                            <li><img src={icon1} alt="img"/></li>
                                            <li><img src={icon2} alt="img"/></li>
                                            <li><img src={icon3} alt="img"/></li>
                                            <li><img src={icon4} alt="img"/></li>
                                            <li><img src={icon5} alt="img"/></li>
                                            <li><img src={icon6} alt="img"/></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="single-services mb-30">
                                <div className="services-thumb">
									<Link to="#" className="gallery-link popup-image" onClick={() => { 
                                    setToggler(!toggler)
                                    setActiveImage(3)
                                }} >
                                    <img src={service3} alt="img"/>
									</Link>
                                </div>
                                <div className="services-content"> 
                                    <div className="day-book">
                                        <ul>
                                            <li>350 RON/Noapte</li>
                                            <li><ScrollLink   className="scroll-link" to="bookingId" smooth={true} duration={500} >Rezervă acum</ScrollLink></li>                                        </ul>
                                    </div>
                                    <h4><Link to="/room-details">Camera dublă cu balcon</Link></h4>    
                                    <p>Camera dublă cu balcon oferă o experiență unică. Dotată cu un pat dublu confortabil, această cameră dispune de un balcon privat, unde vă puteți bucura de priveliști spectaculoase. </p>
                                    <div className="icon">
                                        <ul>
                                            <li><img src={icon1} alt="img"/></li>
                                            <li><img src={icon2} alt="img"/></li>
                                            <li><img src={icon3} alt="img"/></li>
                                            <li><img src={icon4} alt="img"/></li>
                                            <li><img src={icon5} alt="img"/></li>
                                            <li><img src={icon6} alt="img"/></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="single-services mb-30">
                                <div className="services-thumb">
									<Link to="#" className="gallery-link popup-image" onClick={() => { 
                                    setToggler(!toggler)
                                    setActiveImage(4)
                                }}>
                                    <img src={service4} alt="img"/>
									</Link>
                                </div>
                                <div className="services-content"> 
                                    <div className="day-book">
                                        <ul>
                                            <li>400 RON/Noapte</li>
                                            <li><ScrollLink   className="scroll-link" to="bookingId" smooth={true} duration={500} >Rezervă acum</ScrollLink></li>                                        </ul>
                                    </div>
                                    <h4><Link to="/room-details">Cameră dublă delux</Link></h4>    
                                   <p>Camera dublă de lux este o alegere perfectă pentru cei care doresc să se bucure de un nivel superior de confort și eleganță. Această cameră rafinată oferă o experiență de cazare deosebită.</p>
                                    <div className="icon">
                                        <ul>
                                            <li><img src={icon1} alt="img"/></li>
                                            <li><img src={icon2} alt="img"/></li>
                                            <li><img src={icon3} alt="img"/></li>
                                            <li><img src={icon4} alt="img"/></li>
                                            <li><img src={icon5} alt="img"/></li>
                                            <li><img src={icon6} alt="img"/></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="single-services mb-30">
                                <div className="services-thumb">
									<Link to="#" className="gallery-link popup-image" onClick={() => { 
                                    setToggler(!toggler)
                                    setActiveImage(1)
                                }}>
                                    <img src={service1} alt="img" />
									</Link>
                                </div>
                                <div className="services-content"> 
                                    <div className="day-book">
                                        <ul>
                                            <li>200 RON/Noapte</li>
                                            <li><ScrollLink   className="scroll-link" to="bookingId" smooth={true} duration={500} >Rezervă acum</ScrollLink></li>                                        </ul>
                                    </div>
                                    <h4><Link to="/room-details">Cameră dublă standard</Link></h4>    
                                    <p>Dotată cu un pat dublu confortabil și lenjerii curate, camera dublă standard vă asigură un somn odihnitor. Cu un design simplu, oferă un mediu primitor și relaxant pentru oaspeți.</p>
                                    <div className="icon">
                                        <ul>
                                            <li><img src={icon1} alt="img"/></li>
                                            <li><img src={icon2} alt="img"/></li>
                                            <li><img src={icon3} alt="img"/></li>
                                            <li><img src={icon4} alt="img"/></li>
                                            <li><img src={icon5} alt="img"/></li>
                                            <li><img src={icon6} alt="img"/></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="feature-area2 p-relative fix" style={{background: "#f7f5f1"}}>
                 <div className="animations-02"><img src="assets/img/bg/an-img-02.png" alt="contact-bg-an-05" /></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                         <div className="col-lg-6 col-md-12 col-sm-12 pr-30">
                           <div className="feature-img">                               
                                <img src="assets/img/features/feature.png" alt="img" className="img" />              
                            </div>
                        </div>
					   <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="feature-content s-about-content">
                                <div className="feature-title pb-20">                               
                                    <h5>Luxury Hotel & Resort</h5>
                                <h2>
                                 Pearl Of The Adriatic.
                                </h2>                             
                                </div>
                                <p>Vestibulum non ornare nunc. Maecenas a metus in est iaculis pretium. Aliquam ullamcorper nibh lacus, ac suscipit ipsum consequat porttitor.Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam. Nunc rutrum porta ex, in imperdiet tortor feugiat at.</p>
                                <p>Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget.</p>
                                <div className="slider-btn mt-15">                                          
                                    <Link to="/about" className="btn ss-btn smoth-scroll">Discover More</Link>				
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="booking pt-120 pb-120 p-relative fix" id='bookingId'>
                <div className="animations-01"><img src="assets/img/bg/an-img-01.png" alt="an-img-01" /></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                             <div className="contact-bg02">
                                <div className="section-title center-align">
                                    {/* <h5>Rezervă cameră</h5> */}
                                    <h2>
                                    Rezervă cameră
                                    </h2>
                                </div>                                
                                <form action="mail.php" method="post" className="contact-form mt-30">
                                    <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="contact-field p-relative c-name mb-20">                                    
                                            <label><i className="fal fa-badge-check"></i>Check In</label>
                                            <input type="date" id="chackin" name="date" required/>
                                        </div>                               
                                    </div>

                                    <div className="col-lg-6 col-md-6">                               
                                        <div className="contact-field p-relative c-subject mb-20">                                   
                                           <label><i className="fal fa-times-octagon"></i>Check Out</label>
                                            <input type="date" id="chackout" name="date" required/>
                                        </div>
                                    </div>		
                                    <div className="col-lg-6 col-md-6">                               
                                        <div className="contact-field p-relative c-subject mb-20">                                   
                                            <label><i className="fal fa-users"></i>Adulți</label>
                                            <select name="adults" id="adu" required>
                                                <option value="sports-massage">Adulți</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </div>	
                                    <div className="col-lg-6 col-md-6">                               
                                        <div className="contact-field p-relative c-option mb-20">                                   
                                            <label><i className="fal fa-concierge-bell"></i>Camera</label>
                                            <select name="room" id="rm" required>
                                                <option value="sports-massage">Camera</option>
                                                <option value="1">Cameră dublă standard</option>
                                                <option value="2">Cameră dublă superioară</option>
                                                <option value="3">Cameră dublă cu balcon</option>
                                                <option value="4">Cameră dublă cu delox</option>
                                                {/* <option value="5">5</option> */}
                                            </select>
                                        </div>
                                    </div>
                                   


                                    <div className="col-lg-6 col-md-6">
                                        <div className="contact-field p-relative c-name mb-20">                                    
                                            <input type="text" id="firstn" name="firstn" placeholder="Nume" required />
                                        </div>                               
                                    </div>

                                    <div className="col-lg-6 col-md-6">                               
                                        <div className="contact-field p-relative c-subject mb-20">                                   
                                            <input type="text" id="email" name="email" placeholder="E-mail" />
                                        </div>
                                    </div>		
                                    <div className="col-lg-6 col-md-6">                               
                                        <div className="contact-field p-relative c-subject mb-20">                                   
                                            <input type="text" id="phone" name="phone" placeholder="Număr telefon" required />
                                        </div>
                                    </div>	
                                    <div className="col-lg-6 col-md-6">                               
                                        <div className="contact-field p-relative c-subject mb-20">                                   
                                            <input type="text" id="subject" name="subject" placeholder="Subiect" />
                                        </div>
                                    </div>	
                                    <div className="col-lg-12">
                                        <div className="contact-field p-relative c-message mb-30">                                  
                                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Descriere"></textarea>
                                        </div>
                                                                 
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="slider-btn mt-15">                                          
                                            <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s"><span>Rezervă</span></button>				
                                        </div>                             
                                    </div>
                                </div>
                            </form>                            
                            </div>           
                        </div>
                        <div className="col-lg-6 col-md-6">
                             <div className="booking-img">
                                 <img src="assets/img/bg/booking-img.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section id="video" className="video-area pt-150 pb-150 p-relative" style={{background : `url(${BGVImg})` , background_repeat: "no-repeat" ,background_position: "center" , background_size:"cover"}} >
                <div className="content-lines-wrapper2">
                    <div className="content-lines-inner2">
                        <div className="content-lines2"></div>
                    </div>
                </div>
                <div className="container">                   
                     <div className="row">
                        <div className="col-12">
                            <div className="s-video-wrap">
                                <div className="s-video-content">
                                    <Link to="#" onClick={() => setyShow(true)} className="popup-video"><img src="assets/img/bg/play-button.png" alt="circle_right" /></Link>
                                </div>
                            </div>
                            <div className="section-title center-align text-center">
                                <h2>
                                 Take A Tour Of Luxuri
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </main>

        <FsLightbox
            toggler={toggler}
            sources={images}
            slide={activeImage}
        />

        {yShow &&
        <>
            <div className="mfp-bg mfp-ready"></div>
            <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabIndex="-1" style={{overflow: "hidden"}}>
                <div className="mfp-container mfp-s-ready mfp-iframe-holder">
                    <div className="mfp-content">
                        <div className="mfp-iframe-scaler">
                            <button title="Close (Esc)" type="button" className="mfp-close" onClick={() => setyShow(false)}>×</button>
                            <iframe className="mfp-iframe" src="//www.youtube.com/embed/gyGsPlt06bo?autoplay=1" frameborder="0" allowFullScreen=""></iframe>
                        </div>
                    </div>
                    <div className="mfp-preloader">Loading...</div>
                </div>
            </div>
        </>
        }
        
    </>
  )
}

export default Main