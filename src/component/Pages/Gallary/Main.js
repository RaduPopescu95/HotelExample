import { Link } from 'react-router-dom'
import BGImg from "../../../assets/img/slider/our_rooms_bg.png";
import React , { useState , useEffect} from 'react'
import FsLightbox from 'fslightbox-react';

const Main = () => {
    const [activeImage , setActiveImage] = useState(1)

    const [images , setImages] = useState([
   
        'assets/img/gallery/protfolio-img02.png',
        'assets/img/gallery/protfolio-img03.png',
        'assets/img/gallery/protfolio-img01.png',
        'assets/img/gallery/protfolio-img04.png',
        'assets/img/gallery/protfolio-img05.png',
        'assets/img/gallery/protfolio-img06.png',
        'assets/img/gallery/protfolio-img07.png',
        'assets/img/gallery/protfolio-img08.png',
        'assets/img/gallery/protfolio-img09.png',
        'assets/img/gallery/protfolio-img10.png',
	])


    const [img, setImg] = useState()
    const [img1, setImg1] = useState()
    const [img2, setImg2] = useState()
    const [img3, setImg3] = useState()
    const [img4, setImg4] = useState()
    const [img5, setImg5] = useState()
    const [img6, setImg6] = useState()
    const [img7, setImg7] = useState()
    const [img8, setImg8] = useState()
    const [img9, setImg9] = useState()

    const [toggler, setToggler] = useState(false);

    const [tabMenu, tabActive] = useState({all : true})

    const galleryHeight=()=>{
        if(tabMenu.all){
            return "h1200"
        }else if(tabMenu.financial){
            return "h600"
        }else {
            return "h300"
        }
    }
    
   
  return (
    <>
        <main>
            <section className="breadcrumb-area d-flex align-items-center" style={{ background : `url(${BGImg})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-center">
                                <div className="breadcrumb-title">
                                    <h2>Gallery</h2>    
                                    <div className="breadcrumb-wrap">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Gallery </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="profile fix pt-120">
                <div className="container-fluid"> 
                    <div className="row">
                        {/* <div className="col-xl-12 col-lg-12">
                            <div className="my-masonry text-center mb-50">
                                <div className="button-group filter-button-group ">
                                    <button className={`${tabMenu.all && "active"}`} onClick={()=>tabActive({all:true})} data-filter="*">All</button>
                                    <button className={`${tabMenu.financial && "active"}`} onClick={()=>tabActive({financial:true})} data-filter=".financial">Room </button>
                                    <button className={`${tabMenu.banking && "active"}`} onClick={()=>tabActive({banking:true})} data-filter=".banking">Hall </button>	
                                    <button className={`${tabMenu.insurance && "active"}`} onClick={()=>tabActive({insurance:true})} data-filter=".insurance">Guardian </button>
                                    <button className={`${tabMenu.family && "active"}`} onClick={()=>tabActive({family:true})} data-filter=".family">Hotel </button>
                                    <button className={`${tabMenu.business && "active"}`} onClick={()=>tabActive({business:true})} data-filter=".business">Event Hall</button>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-lg-12">
                            <div className="masonry-gallery-huge">
                                <div className="gallery" style={{position: "relative", margin:20}}>
                              
                              
                                    
                                        <Link to="#" onClick={() => setImg(true)} className="popup-image">
                                            <figure className="gallery-image" onClick={() => {
                                                setToggler(!toggler)
                                                setActiveImage(3)
                                            }}>
                                                <img src="assets/img/gallery/protfolio-img01.png" alt="img" className="gallery__image" /> 
                                            </figure>
                                        </Link>
                                        <Link to="#" onClick={() => setImg(true)} className="popup-image">
                                            <figure className="gallery-image" onClick={() => {
                                                setToggler(!toggler)
                                                setActiveImage(3)
                                        }}>
                                                <img src="assets/img/gallery/protfolio-img03.png" alt="img" className="gallery__image" /> 
                                            </figure>
                                        </Link>
                                    
                                        <Link to="#" onClick={() => setImg(true)} className="popup-image">
                                            <figure className="gallery-image" onClick={() => {
                                                setToggler(!toggler)
                                                setActiveImage(3)
                                            }}>
                                                <img src="assets/img/gallery/protfolio-img04.png" alt="img" className="gallery__image" /> 
                                            </figure>
                                        </Link>
                                    
                                </div>
                                <div className="gallery" style={{position: "relative", margin:20}}>
                              
                         
                             
                              <Link to="#" onClick={() => setImg(true)} className="popup-image">
                                  <figure className="gallery-image" onClick={() => {
                                      setToggler(!toggler)
                                      setActiveImage(3)
                                  }}>
                                      <img src="assets/img/gallery/protfolio-img05.png" alt="img" className="gallery__image" /> 
                                  </figure>
                              </Link>
                              <Link to="#" onClick={() => setImg(true)} className="popup-image">
                                  <figure className="gallery-image" onClick={() => {
                                      setToggler(!toggler)
                                      setActiveImage(3)
                              }}>
                                      <img src="assets/img/gallery/protfolio-img07.png" alt="img" className="gallery__image" /> 
                                  </figure>
                              </Link>
                          
                              <Link to="#" onClick={() => setImg(true)} className="popup-image">
                                  <figure className="gallery-image" onClick={() => {
                                      setToggler(!toggler)
                                      setActiveImage(3)
                                  }}>
                                      <img src="assets/img/gallery/protfolio-img09.png" alt="img" className="gallery__image" /> 
                                  </figure>
                              </Link>
                          
                      </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        
        <FsLightbox
            toggler={toggler}
            sources={images}
            slide={activeImage}
        />
        
    </>
  )
}

export default Main