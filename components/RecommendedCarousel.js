import Slider from "react-slick";

import { PureComponent } from 'react';
import { recommended } from "../data/Recommend";
import { settings } from "./utils/SlideSettings";
import { withFocusable, initNavigation } from '../spatialNavigation/src';

class Image extends PureComponent {
  render() {
    return (<img className={`${this.props.focused ? ' activeItem' : ''}`} src={this.props.src} alt={this.props.alt} />);
  }
}

const ImageFocusable = withFocusable({
  trackChildren: true
})(Image);

const RecommendedCarousel = () => {
  return (
    <div className="mt-10 mb-16">
      <div className="ml-2 mb-3">
        <h2 className="text-gray-500 mb-1 font-light">Recommended For You</h2>
      </div>
      <Slider {...settings}>
        {recommended.map(rec => (
          <div className="shadow-xl px-2 py-2 cursor-pointer" key={rec.title}>
            <ImageFocusable src={rec.src} alt={rec.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecommendedCarousel;
