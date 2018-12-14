import React, {Component} from 'react'
import PortfolioItem from '../components/portfolio-item'
import Slider from 'react-slick'

class Portfolio extends Component {
    constructor(props){
        super(props);
      }
//const Portfolio = ({items}) => (
    render(){
        var settings = {
            dots: true,
              infinite: true,
              speed: 5000,
              autoplay: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplaySpeed: 5000,
              cssEase: "linear",
            responsive: [
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return(
            <section className="portfolio-section p-3 p-lg-5 d-flex d-column" id="portfolio">
                <div className="my-auto">
                <h2 className="mb-5">Portfolio</h2>
                     <Slider {...settings}>
                           <PortfolioItem />
                    </Slider>
                </div>

            </section>
        );
    }
//)
}

export default Portfolio