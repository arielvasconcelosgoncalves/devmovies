import { Container } from '../../pages/Home/styles';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = ({ info, title }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper grabCursor spaceBetween={10} slidesPerView={'auto'} className="swiper">
        {info.map((item, index) => (
          <div key={index}>{item.title}</div>
        ))}
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Slider;
