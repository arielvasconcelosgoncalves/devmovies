import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from './styles';
import Card from '../Card';

const Slider = ({ info, title }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper grabCursor spaceBetween={10} slidesPerView={'auto'} className="swiper">
        {info.map((item, index) => (
          <SwiperSlide>
            <div key={index}>
              <Card item={item}></Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Slider;
