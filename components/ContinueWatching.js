import Router from "next/router";
import Slider from "react-slick";
import { keepWatching } from "../data/ContinueWatching";
import { settings } from "./utils/SlideSettings";
import { withFocusable } from '../spatialNavigation/src';

const Img = ({ onEnterPress, src, alt, focused }) => {
    return (<img src={src} onClick={onEnterPress} alt={alt} className={`${focused ? ' activeItem' : ''}`} />);
}

const FocusableImg = withFocusable()(Img);

const ContinueWatching = () => {
  return (
    <div className="mb-16">
      <div className="recommended ml-2 mt-5">
        <h2 className="text-gray-500 mb-1 font-light">Continue Watching</h2>
      </div>
      <Slider {...settings}>
        {keepWatching.map(watching => (
          <div
            className="shadow-xl px-2 py-2 cursor-pointer"
            key={watching.title}
          >
            <FocusableImg
              onEnterPress={() => Router.push(`${watching.link}`)}
              src={watching.src}
              alt={watching.title}
            />
            <div className="h-1 bg-blue-500 w-1/3" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ContinueWatching;
