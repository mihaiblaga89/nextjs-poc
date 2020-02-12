import { PureComponent } from 'react'
import { Carousel } from "react-responsive-carousel";
import { withFocusable } from '../spatialNavigation/src';

import { slides } from "../data/HeroCarousel";

class FCarousel extends PureComponent {
  componentDidMount() {
    this.props.setFocus()
  }
  
  render() {
    return (
      <Carousel showThumbs={false}
        showStatus={false}
        showArrows={false}
        autoPlay
        interval={3000}
        infiniteLoop 
        className={`carouselSelect${this.props.focused ? ' activeItem' : ''}`}
      >
        {this.props.children}
      </Carousel>);
  }
}

const FocusableCarousel = withFocusable()(FCarousel);

const HeroCarousel = () => {
  return (
    <FocusableCarousel>
      {slides.map(s => (
        <div key={s.id}>
          <img src={s.src} alt={s.title} />
        </div>
      ))}
    </FocusableCarousel>
  );
};

export default HeroCarousel;
