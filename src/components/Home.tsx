import { KeyboardEvent, KeyboardEventHandler, useState } from "react";
import styled, { keyframes } from "styled-components";

const HomeWrapper = styled.div`
  display: block;
  height: 100%;
  box-sizing: border-box;
`;

const fade = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1;
  }
`;

const Carousel = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  width: 100%;
  max-width: 100%;
`;

const CarouselItems = styled.div`
  flex: auto;
`;

interface CarouselItemProps {
  active?: boolean;
}

const CarouselItem = styled.div<CarouselItemProps>`
  animation: ${fade} 1.5s ease-in-out;
  display: ${(props) => (props.active ? "block" : "none")};
  margin-inline: auto;
`;

const CarouselControl = styled.button`
  padding: 15px;
  display: block;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

const CarouselPrev = styled(CarouselControl)``;
const CarouselNext = styled(CarouselControl)``;

const Image = styled.img`
  display: inline-block;
  width: 100%;
  height: 500px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
`;

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const incrementSlideIndex = () => {
    if (slideIndex >= carouselItems.length - 1) setSlideIndex(0);
    else setSlideIndex(slideIndex + 1);
  };

  const decrementSlideIndex = () => {
    if (slideIndex <= 0) setSlideIndex(carouselItems.length - 1);
    else setSlideIndex(slideIndex - 1);
  };

  const carouselItems = [
    "https://images.pexels.com/photos/11866150/pexels-photo-11866150.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    "https://images.pexels.com/photos/3630161/pexels-photo-3630161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/3606871/pexels-photo-3606871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  ].map((item, index) => (
    <CarouselItem key={item} active={index === slideIndex}>
      <Image alt="wallpaper" src={item} onClick={incrementSlideIndex}></Image>
    </CarouselItem>
  ));

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    console.log(event.key);
  };

  return (
    <HomeWrapper onKeyDown={handleKeyDown}>
      <Carousel>
        <CarouselPrev onClick={incrementSlideIndex}>
          <span className="material-icons">arrow_back_ios</span>
        </CarouselPrev>
        <CarouselItems>{carouselItems}</CarouselItems>
        <CarouselNext onClick={decrementSlideIndex}>
          <span className="material-icons">arrow_forward_ios</span>
        </CarouselNext>
      </Carousel>
    </HomeWrapper>
  );
};

export default Home;