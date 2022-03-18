import './Banner.css'
import bannerImg from './banner2.jpg'

function Banner() {
    return (
        <>
            <div className="banner-main">
                <img className='banner-img' src={bannerImg} alt="" />    
            </div>
        </>
    )
}

export default Banner;