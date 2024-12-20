
import image1 from '../images/image-1.jpeg';
import image2 from '../images/image-2.avif';
import image3 from '../images/image-3.png';

import '../Componentscss/slider.css';

function Slider() {
    return (
      <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100 hight-500" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={image2} className="d-block w-100 hight-500" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={image3} className="d-block w-100 hight-500" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    );
}

export default Slider;



