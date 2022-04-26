import { Wrapper, SliderImage } from './HomeSlider.styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const HomeSlider = () => {
  return (
    <Wrapper>
      <Carousel
        responsive={responsive}
        draggable={false}
        autoPlaySpeed={8000}
        infinite
        customTransition={'transform 900ms ease-out'}
      >
        <SliderImage src={require('../../../../assets/images/263093241.jpg')} alt={'slider'} />
        <SliderImage src={require('../../../../assets/images/262923312.jpg')} alt={'slider'} />
        <SliderImage src={require('../../../../assets/images/259859040.jpg')} alt={'slider'} />
      </Carousel>
    </Wrapper>
  );
};

export default HomeSlider;
