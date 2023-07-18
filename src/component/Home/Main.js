import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import BGImg from "../../assets/img/slider/slider_bg.png";
import BGImg1 from "../../assets/img/slider/slider_bg_01.png";
import BGTest from "../../assets/img/bg/testimonial-bg.png";
import BGVideo from "../../assets/img/bg/video-bg.png"
import Slider from "react-slick"
import FsLightbox from 'fslightbox-react';
import About from "../../assets/img/bg/an-img-02.png"
import About1 from "../../assets/img/features/about_img_02.png"
import About2 from "../../assets/img/features/about_img_03.png"
import About3 from "../../assets/img/features/signature.png"
import Hotel from "../../assets/img/bg/an-img-01.png"
import Hotel1 from "../../assets/img/icon/fe-icon01.png"
import Hotel2 from "../../assets/img/icon/fe-icon04.png"
import Hotel3 from "../../assets/img/icon/fe-icon05.png"
import Hotel4 from "../../assets/img/icon/fe-icon06.png"
import Hotel5 from "../../assets/img/icon/fe-icon07.png"
import Hotel6 from "../../assets/img/icon/fe-icon08.png"
import service1 from "../../assets/img/gallery/room-img01.png"
import service2 from "../../assets/img/gallery/room-img02.png"
import service3 from "../../assets/img/gallery/room-img03.png"
import service4 from "../../assets/img/gallery/room-img04.png"
import icon1 from "../../assets/img/icon/sve-icon1.png"
import icon2 from "../../assets/img/icon/sve-icon2.png"
import icon3 from "../../assets/img/icon/sve-icon3.png"
import icon4 from "../../assets/img/icon/sve-icon4.png"
import icon5 from "../../assets/img/icon/sve-icon5.png"
import icon6 from "../../assets/img/icon/sve-icon6.png"
import Resort from "../../assets/img/bg/an-img-02.png"
import Resort1 from "../../assets/img/features/feature.png"
import pricing1 from "../../assets/img/bg/an-img-02.png"
import avatar1 from "../../assets/img/testimonial/testi_avatar.png"
import avatar2 from "../../assets/img/testimonial/testi_avatar_02.png" 
import avatar3 from "../../assets/img/testimonial/testi_avatar_03.png"
import Aicon from "../../assets/img/testimonial/qt-icon.png"
import Aicon1 from "../../assets/img/testimonial/review-icon.png"
import Booking from "../../assets/img/bg/booking-img.png"
import Play from "../../assets/img/bg/play-button.png"
import Blog from "../../assets/img/bg/an-img-06.png"
import Blog1 from "../../assets/img/blog/inner_b1.jpg"
import Blog2 from "../../assets/img/blog/inner_b2.jpg"
import Blog3 from "../../assets/img/blog/inner_b3.jpg"
import Brand1 from "../../assets/img/brand/b-logo1.png"
import Brand2 from "../../assets/img/brand/b-logo2.png"
import Brand3 from "../../assets/img/brand/b-logo3.png"
import Brand4 from "../../assets/img/brand/b-logo4.png"
import Brand5 from "../../assets/img/brand/b-logo5.png"


const Main = () => {
    const [yShow, setyShow] = useState()
    const [hShow, sethShow] = useState()
    const [animation, setanimation] = useState()

    const [toggler, setToggler] = useState(false);
    const [activeImage , setActiveImage] = useState(1)
    const [images , setImages] = useState([
        'assets/img/gallery/room-img01.png',
        'assets/img/gallery/room-img02.png',
        'assets/img/gallery/room-img03.png',
        'assets/img/gallery/room-img04.png',
        'assets/img/gallery/room-img05.png',
        'assets/img/gallery/room-img06.png'
	])

    const home = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 900,
        autoplay: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const service = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 900,
        autoplay: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const testimonial = {
        initialIndex: 2,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 900,
        autoplay: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const brand = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 900,
        autoplay: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

  return (
    <>
        <main>
            <section id="home" className="slider-area fix p-relative">
                <Slider className="slider-active" {...home}>
                    <div className="col-xl-2">
                        <div className="single-slider slider-bg d-flex align-items-center" style={{backgroundImage: `url(${BGImg})`}}>
                            <div className="container">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-lg-7 col-md-7">
                                        <div className="slider-content s-slider-content mt-80 text-center">
                                            <h2 className={`${animation && "animation" && "fadeInUp"} `} data-animation="fadeInUp" data-delay=".4s" style={{animationDelay: "0.4s"}}>Bucură-te de o experiență de lux</h2>
                                            {/* <p data-animation="fadeInUp" data-delay=".6s">Situat într-o locație pitorească, hotelul nostru vă oferă camere elegante și spațioase, amenajate cu gust și dotate cu facilități moderne.</p> */}
                                            
                                            <div className="slider-btn mt-30 mb-105">     
                                                <Link to="/contact" className="btn ss-btn mr-15" data-animation="fadeInLeft" data-delay=".4s">Descoperă mai mult</Link>
                                                {/* <Link to="#"  onClick={() => sethShow(true)} className="video-i popup-video" data-animation="fadeInUp" data-delay=".8s" style={{animation_delay:" 0.8s"}} tabIndex="0"><i className="fas fa-play"></i> Intro Video</Link> */}
                                            </div>                
                                        </div>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2">
                    <div className="single-slider slider-bg d-flex align-items-center" style={{backgroundImage: `url(${BGImg1})`, background_size: "cover"}}>
                        <div className="container">
                           <div className="row justify-content-center align-items-center">
                                <div className="col-lg-7 col-md-7">
                                    <div className="slider-content s-slider-content mt-80 text-center">
                                        <h2 data-animation="fadeInUp" data-delay=".4s" style={{animationDelay: "0.4s"}}>Bucură-te de o experiență de lux</h2>
                                        {/* <p data-animation="fadeInUp" data-delay=".6s">Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique, commodo gravida lectus non.</p> */}
                                        
                                        <div className="slider-btn mt-30 mb-105">     
                                        <Link to="/contact" className="btn ss-btn mr-15" data-animation="fadeInLeft" data-delay=".4s">Descoperă mai mult</Link>
                                            {/* <Link to="#" onClick={() => sethShow(true)}  className="video-i popup-video" data-animation="fadeInUp" data-delay=".8s" style={{animation_delay:" 0.8s"}} tabIndex="0"><i className="fas fa-play"></i> Intro Video</Link> */}
                                        </div>                
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                    </div>
                </Slider>
            </section>
            {/* <div id="booking" className="booking-area p-relative">
                <div className="container">
                    <form action="#" className="contact-form" >
                        <div className="row align-items-center">
                            <div className="col-lg-12"> 
                                <ul>
                                    <li> 
                                        <div className="contact-field p-relative c-name">  
                                            <label><i className="fal fa-badge-check"></i> Check In Date</label>
                                            <input type="date" id="chackin" name="date" />
                                        </div>      
                                    </li>
                                    <li> 
                                        <div className="contact-field p-relative c-name">  
                                            <label><i className="fal fa-times-octagon"></i> Check Out Date</label>
                                            <input type="date" id="chackout" name="date" />
                                        </div>      
                                    </li>
                                        <li> 
                                        <div className="contact-field p-relative c-name">  
                                            <label><i className="fal fa-users"></i> Adults</label>
                                            <select name="adults" id="adu">
                                                <option value="sports-massage">Adults</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>      
                                    </li>
                                        <li> 
                                        <div className="contact-field p-relative c-name">  
                                            <label><i className="fal fa-baby"></i> Child</label>
                                            <select name="child" id="cld">
                                                <option value="sports-massage">Child</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>      
                                    </li>
                                        <li> 
                                        <div className="contact-field p-relative c-name">  
                                            <label><i className="fal fa-concierge-bell"></i> Room</label>
                                            <select name="room" id="rm">
                                                <option value="sports-massage">Room</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>      
                                    </li>                                    
                                    <li>
                                        <div className="slider-btn">    
                                            <label><i className="fal fa-calendar-alt"></i></label>
                                            <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">Check Availability</button>
                                        </div>     
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div> */}
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
            <section id="service-details2" className="pt-120 pb-90 p-relative" style={{background: "#f7f5f1"}}>
                <div className="animations-01"><img src={Hotel} alt="an-img-01"/></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="section-title center-align mb-50 text-center">
                                {/* <h5>Explorează</h5> */}
                                <h2>
                                Explorează
                                </h2>
                                <p>Hotelul nostru oferă servicii de lux cu un nivel extraordinar de atenție la detalii și rafinament. Cu o echipă dedicată și ospitalitate remarcabilă, ne asigurăm că fiecare oaspete se simte tratat cu cea mai mare grijă și respect. De la momentul sosirii, veți fi întâmpinați cu un serviciu impecabil și personalizat, într-o atmosferă elegantă și sofisticată.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                                <div className="services-08-item mb-30">
                                    <div className="services-icon2">
                                       <img src={Hotel1} alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                     <img src={Hotel1} alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        {/* <h3><Link to="/service-details">Camere de calitate</Link></h3> */}
                                        <h3>Camere de calitate</h3>
                                        <p>Camerele noastre de calitate superioară în hotelul nostru sunt concepute cu grijă pentru a vă oferi o experiență deosebită de confort și relaxare. Fiecare cameră este amenajată cu atenție la detalii și dotată cu facilități moderne, pentru a vă asigura că vă simțiți ca acasă și că aveți tot ceea ce aveți nevoie pentru a vă bucura de ședere.</p>
                                        {/* <p>Camerele noastre de calitate superioară în hotelul nostru sunt concepute cu grijă pentru a vă oferi o experiență deosebită de confort și relaxare.</p> */}
                                        {/* <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link> */}
                                    </div>
                                </div>
                            </div>
                              <div className="col-lg-4 col-md-6">                                  
                                <div className="services-08-item mb-30">
                                     <div className="services-icon2">
                                       <img src={Hotel2} alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                   <img src={Hotel2} alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3>Acces la pârtii de schi</h3>
                                       <p>Situat într-o locație privilegiată în apropierea stațiunii de schi, suntem locația ideală pentru iubitorii de sporturi de iarnă. Imediat ce părăsiți hotelul nostru, veți avea posibilitatea de a vă bucura de aventurile pe pârtii. Nu va trebui să parcurgeți distanțe lungi sau să faceți deplasări complicate pentru a ajunge la pârtii.</p>
                                         {/* <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link> */}
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-4 col-md-6">
                               <div className="services-08-item mb-30">
                                     <div className="services-icon2">
                                       <img src={Hotel3} alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                     <img src={Hotel3} alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3>Cea mai bună cazare</h3>
                                        <p>Bine ați venit la hotelul nostru, una dintre cele mai bune opțiuni de cazare disponibile. Situat într-un cadru pitoresc, hotelul nostru oferă o experiență remarcabilă de ospitalitate și confort. Indiferent dacă sunteți în călătorie de afaceri sau în vacanță, vă veți bucura de facilități de primă clasă și de servicii personalizate.</p>
                                         {/* <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link> */}
                                    </div>
                                </div>
                            </div>
                         <div className="col-lg-4 col-md-6">
                               <div className="services-08-item mb-30">
                                     <div className="services-icon2">
                                       <img src={Hotel4} alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                     <img src={Hotel4} alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3> Wellness & Spa</h3>
                                        <p>Cu facilități moderne și tratamente specializate, vă oferim o gamă variată de servicii concepute pentru a vă ajuta să vă relaxați, să vă reîncărcați și să vă răsfățați. Indiferent dacă doriți să vă eliberați de stres, să vă revigorați sau să vă îngrijiți corpul, echipa noastră de experți vă va ghida și vă va oferi cele mai bune soluții adaptate nevoilor dumneavoastră.</p>
                                        {/* <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link> */}
                                    </div>
                                </div>
                            </div>
                              <div className="col-lg-4 col-md-6">
                               <div className="services-08-item mb-30">
                                   <div className="services-icon2">
                                       <img src={Hotel5} alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                   <img src={Hotel5} alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3>Restaurant & Bar</h3>
                                       <p>Restaurantul nostru și barul sunt facilități de lux oferite în cadrul hotelului nostru, concepute pentru a satisface cele mai exigente gusturi culinare și pentru a crea o atmosferă relaxantă și elegantă. Restaurantul nostru deosebit oferă o experiență gastronomică rafinată, unde bucătari talentați pregătesc preparate delicioase din bucătăria internațională și locală. </p>
                                         {/* <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link> */}
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-4 col-md-6">
                                <div className="services-08-item mb-30">
                                    <div className="services-icon2">
                                       <img src={Hotel6} alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                     <img src={Hotel6} alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3>Sală de conferințe și evenimente</h3>
                                        <p>Sala noastră de conferințe și evenimente este locația ideală pentru organizarea întâlnirilor de afaceri, conferințelor, seminariilor sau evenimentelor speciale. Cu dotări moderne și o atmosferă elegantă, sala noastră oferă un mediu profesional și confortabil pentru desfășurarea activităților dumneavoastră.</p>
                                         {/* <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link> */}
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
            <section id="services" className="services-area pt-113 pb-150">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12">    
                            <div className="section-title center-align mb-50 text-center">
                                {/* <h5>The pleasure of luxury</h5> */}
                                <h2>Camere</h2>
                                <p>Camerele noastre de hotel oferă un confort și o relaxare absolută pentru oaspeții noștri. Fiecare cameră este amenajată cu atenție la detalii, creând o atmosferă primitoare și plăcută.</p>
                            </div>
                        </div>
                    </div>
                    <Slider className="row services-active" {...service}> 
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
                                            <li><Link to="/contact">Rezervă acum</Link></li>
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
                                            <li><Link to="/contact">Rezervă acum</Link></li>
                                        </ul>
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
                                            <li><Link to="/contact">Rezervă acum</Link></li>
                                        </ul>
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
                                            <li><Link to="/contact">Rezervă acum</Link></li>
                                        </ul>
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
                    </Slider>
                </div>
            </section>
            {/* <section className="feature-area2 p-relative fix" style={{background: "#f7f5f1"}}>
                 <div className="animations-02"><img src={Resort} alt="contact-bg-an-05"/></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                         <div className="col-lg-6 col-md-12 col-sm-12 pr-30">
                           <div className="feature-img">                               
                                <img src={Resort1} alt="img" className="img"/>              
                            </div>
                        </div>
					   <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="feature-content s-about-content">
                                <div className="feature-title pb-20">                               
                                    <h5>AlexRelax</h5>
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
            {/* <section id="pricing" className="pricing-area pt-120 pb-60 fix p-relative">
                <div className="animations-01"><img src={Hotel} alt="an-img-01"/></div>
                <div className="animations-02"><img src={pricing1} alt="contact-bg-an-01"/></div>
                <div className="container"> 
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="section-title mb-20">
                                <h5>Best Prices</h5>
                                <h2>Extra Services</h2>                               
                            </div>
                            <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
                            <p>Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget.</p>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-box pricing-box2 mb-60">
                                <div className="pricing-head">  
                                    <h3>Room cleaning</h3>    
                                    <p>Perfect for early-stage startups</p>
                                    <div className="month">Monthly</div>
                                    <div className="price-count">
                                        <h2>$39.99</h2>
                                    </div> 
                                    <hr/>
                                </div>
                                <div className="pricing-body mt-20 mb-30 text-left">
                                    <ul>
                                        <li>Hotel quis justo at lorem</li>
                                        <li>Fusce sodales, urna et tempus</li>
                                        <li>Vestibulum blandit lorem quis</li>                                           
                                    </ul>
                                </div>  
                                <div className="pricing-btn">
                                    <Link to="/contact" className="btn ss-btn">Get Started <i className="fal fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                         <div className="col-lg-4 col-md-6">
                            <div className="pricing-box pricing-box2 mb-60">
                                <div className="pricing-head">  
                                    <h3>Drinks included</h3>    
                                    <p>Perfect for early-stage startups</p>
                                    <div className="month">Monthly</div>
                                    <div className="price-count">
                                        <h2>$59.99</h2>
                                    </div> 
                                    <hr/>
                                </div>
                                <div className="pricing-body mt-20 mb-30 text-left">
                                    <ul>
                                        <li>Hotel quis justo at lorem</li>
                                        <li>Fusce sodales, urna et tempus</li>
                                        <li>Vestibulum blandit lorem quis</li> 
                                    </ul>
                                </div> 
                                <div className="pricing-btn">
                                    <Link to="/contact" className="btn ss-btn">Get Started <i className="fal fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="testimonial-area pt-120 pb-90 p-relative fix" style={{backgroundImage: `url(${BGTest})`, background_size: "cover"}} >
                <div className="container">
                    <div className="row">
                         <div className="col-lg-12">
                            <div className="section-title center-align mb-50 text-center">
                                <h5>Testimonial</h5>
                                <h2>Ce spun clienții noștri</h2>
                                <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <Slider className="testimonial-active" {...testimonial}>
                                <div className="single-testimonial">
                                     <div className="testi-author">
                                        <img src={avatar1} alt="img"/>
                                        <div className="ta-info">
                                            <h6>Radu Alexandru</h6>
                                            <span>Client</span>
                                        </div>
                                    </div>
                                    <div className="review-icon">
                                        <img src={Aicon1} alt="img"/>
                                     </div>
                                    <p>“Am avut o experiență fantastică la hotelul AlexRelax! Camerele erau spațioase și curate, iar patul era extrem de confortabil. Personalul a fost prietenos și atent la nevoile noastre. Am savurat o cină delicioasă în restaurantul lor elegant, unde mâncarea a fost absolut delicioasă. De asemenea, am petrecut timp în spa-ul lor relaxant și ne-am simțit revigorați. Recomand cu căldură acest hotel tuturor celor care doresc o experiență de cazare de calitate superioară!”</p>
                                    
                                    <div className="qt-img">
                                    <img src={Aicon} alt="img"/>
                                    </div>
                                </div>
                                <div className="single-testimonial">
                                        <div className="testi-author">
                                            <img src={avatar2} alt="img"/>
                                            <div className="ta-info">
                                                <h6>Popescu Anastasia</h6>
                                                <span>Client</span>
                                            </div>
                                        </div>
                                    <div className="review-icon">
                                            <img src={Aicon1} alt="img"/>
                                        </div>
                                        <p>“Hotelul AlexRelax oferă un raport calitate-preț excelent. Camerele erau curate și confortabile, iar personalul a fost amabil și receptiv la cererile noastre. Deși nu am avut ocazia să încercăm toate facilitățile, restaurantul lor a servit preparate delicioase și proaspete. Singurul aspect negativ a fost faptul că unele părți ale hotelului păreau puțin învechite și ar putea beneficia de o renovare. Cu toate acestea, în ansamblu, am avut o ședere plăcută și aș considera să mă întorc în viitor.”</p>
                                        
                                        <div className="qt-img">
                                        <img src={Aicon} alt="img"/>
                                        </div>
                                    </div>
                                <div className="single-testimonial">
                                        <div className="testi-author">
                                            <img src={avatar3} alt="img"/>
                                            <div className="ta-info">
                                                <h6>Mihaela</h6>
                                                <span>Client</span>
                                            </div>
                                        </div>
                                        <div className="review-icon">
                                            <img src={Aicon1} alt="img"/>
                                        </div>
                                        <p>“Super hotel ! Am fost foarte mulțumită de serviciile oferite , de la Recepționeri pana la curățenie , servicii de alimentație . Personalul hotelului cu care am interacționat este format dintr-o echipa de oameni foarte drăguți , deosebit de amabili și dedicați . Știu sa-și personalizeze relația cu clientul. Știu sa fie atenți . Bravo ! Am avut o experiența foarte plăcută pe toată durata șederii mele in hotel . Recomand cu încredere”</p>
                                        
                                        <div className="qt-img">
                                        <img src={Aicon} alt="img"/>
                                        </div>
                                    </div>
                                <div className="single-testimonial">
                                     <div className="testi-author">
                                        <img src={avatar2} alt="img"/>
                                        <div className="ta-info">
                                            <h6>George</h6>
                                            <span>Client</span>
                                        </div>
                                    </div>
                                   <div className="review-icon">
                                        <img src={Aicon1} alt="img"/>
                                     </div>
                                      <p>“A fost al treilea sejur in acest hotel,de fiecare data am revenit cu placere.
Micul dejun foarte bun, hotelul curat, cu personal foarte amabil si competent, camera foarte spatioasa, baia la fel. Hotelul poate fi gasit foarte usor, este situat pe una din arterele importante ale orasului, are o parcare incapatoare, bine luminata.”</p>
                                    
                                    <div className="qt-img">
                                    <img src={Aicon} alt="img"/>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="booking pt-120 pb-120 p-relative fix">
                <div className="animations-01"><img src={Hotel} alt="an-img-01"/></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                             <div className="contact-bg02">
                                <div className="section-title center-align">
                                    <h5>make appointment</h5>
                                    <h2>
                                       Book A Room
                                    </h2>
                                </div>                                
                                <form action="mail.php" method="post" className="contact-form mt-30">
                                    <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="contact-field p-relative c-name mb-20">                                    
                                           <label><i className="fal fa-badge-check"></i> Check In Date</label>
                                            <input type="date" id="chackin2" name="date" />
                                        </div>                               
                                    </div>

                                    <div className="col-lg-6 col-md-6">                               
                                        <div className="contact-field p-relative c-subject mb-20">                                   
                                           <label><i className="fal fa-times-octagon"></i> Check Out Date</label>
                                            <input type="date" id="chackout2" name="date" />
                                        </div>
                                    </div>		
                                    <div className="col-lg-6 col-md-6">                               
                                        <div className="contact-field p-relative c-subject mb-20">                                   
                                            <label><i className="fal fa-users"></i> Adults</label>
                                            <select name="adults" id="adu2">
                                                <option value="sports-massage">Adults</option>
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
                                            <label><i className="fal fa-concierge-bell"></i> Room</label>
                                            <select name="room" id="rm2">
                                                <option value="sports-massage">Room</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="slider-btn mt-15">                                          
                                            <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s"><span>Book Table Now</span></button>				
                                        </div>                             
                                    </div>
                                </div>
                            </form>                            
                            </div>  
                                             
                        </div>
                        <div className="col-lg-6 col-md-6">
                             <div className="booking-img">
                                 <img src={Booking} alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="video" className="video-area pt-150 pb-150 p-relative" style={{backgroundImage: `url(${BGVideo})`, background_repeat: "no-repeat", background_position: "bottom", background_size:"cover"}}>
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
                                    <Link to="#" className="popup-video" onClick={() => setyShow(true)}><img src={Play} alt="circle_right"/></Link>
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
            </section>
            <section id="blog" className="blog-area p-relative fix pt-90 pb-90">
                <div className="animations-02"><img src={Blog} alt="contact-bg-an-05"/></div>
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
                                    <Link to="/blog-details"><img src={Blog1} alt="img"/></Link>
                                </div>                    
                                <div className="blog-content2">    
                                    <div className="date-home">
                                        24th March 2022
                                    </div>
                                    <h4><Link to="/blog-details">Cras accumsan nulla nec lacus ultricies placerat.</Link></h4> 
                                    <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.</p>
                                    <div className="blog-btn"><Link to="/blog-details">Read More</Link></div>
                                     
                                </div>
                            </div>
                        </div>
                         <div className="col-lg-4 col-md-6">
                            <div className="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                <div className="blog-thumb2">
                                    <Link to="/blog-details"><img src={Blog2} alt="img"/></Link>
                                </div>
                                <div className="blog-content2">                                    
                                    <div className="date-home">
                                       24th March 2022
                                    </div>
                                    <h4><Link to="/blog-details">Dras accumsan nulla nec lacus ultricies placerat.</Link></h4> 
                                    <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.</p>
                                    <div className="blog-btn"><Link to="/blog-details">Read More</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                <div className="blog-thumb2">
                                    <Link to="/blog-details"><img src={Blog3} alt="img"/></Link>
                                </div>
                                <div className="blog-content2">                                    
                                    <div className="date-home">
                                        24th March 2022
                                    </div>
                                    <h4><Link to="/blog-details">Seas accumsan nulla nec lacus ultricies placerat.</Link></h4> 
                                    <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.</p>
                                    <div className="blog-btn"><Link to="/blog-details">Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <div className="brand-area pt-60 pb-60"  style={{background :"#f7f5f1"}}>
                <div className="container">
                    <Slider className="row brand-active" {...brand}>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                <img src={Brand1} alt="img"/>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                 <img src={Brand2} alt="img"/>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                 <img src={Brand3} alt="img"/>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                  <img src={Brand4} alt="img"/>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                 <img src={Brand5} alt="img"/>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div> */}
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
        {hShow &&
            <>  
                <div className="mfp-bg mfp-ready"></div>
                <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabIndex="-1" style={{overflow: "hidden"}}>
                    <div className="mfp-container mfp-s-ready mfp-iframe-holder">
                        <div className="mfp-content">
                            <div className="mfp-iframe-scaler">
                                <button title="Close (Esc)" type="button" className="mfp-close" onClick={() => sethShow(false)}>×</button>
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