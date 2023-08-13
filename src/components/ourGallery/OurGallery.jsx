import './ourGallery.css'
import galleryImg1 from '../../images/ourGallery/galaryImg1.jpg'
import galleryImg2 from '../../images/ourGallery/galaryImg2.jpg'
import galleryImg3 from '../../images/ourGallery/galaryImg3.jpg'
import galleryImg4 from '../../images/ourGallery/galaryImg4.jpg'
import galleryImg5 from '../../images/ourGallery/galaryImg5.jpg'
import galleryImg6 from '../../images/ourGallery/galaryImg6.jpg'
export default function OurGallery(){
    return(
        <>
        <div className="ourGallerySection marginTop2">
            <div className="ourGallery container">
                <div className="galleryImg">
                <img src={galleryImg1} alt=""  />
                </div>
                <div className="galleryImg">
                <img src={galleryImg2} alt=""  />
                </div>
                <div className="galleryImg">
                <img src={galleryImg3} alt=""  />
                </div>
                <div className="galleryImg">
                <img src={galleryImg4} alt=""  />
                </div>
                <div className="galleryImg">
                <img src={galleryImg5} alt=""  />
                </div>
                <div className="galleryImg">
                <img src={galleryImg6} alt=""  />
                </div>
            </div>
        </div>
        </>
    )
}