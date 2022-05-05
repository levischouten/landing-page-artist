import { useState } from "react";
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

const Image = styled.img`
  display: block;
  margin-inline: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const incrementSlideIndex = () => {
    if (slideIndex >= carouselItems.length - 1) setSlideIndex(0);
    else setSlideIndex(slideIndex + 1);
  };

  // const decrementSlideIndex = () => {
  //   if (slideIndex <= 0) setSlideIndex(carouselItems.length - 1);
  //   else setSlideIndex(slideIndex - 1);
  // };

  const carouselItems = [
    "./images/3X3-1_web.jpg",
    "./images/3X3-2_web.jpg",
    "./images/150-1_web.jpg",
    "./images/150-2_web.jpg",
  ].map((item, index) => (
    <CarouselItem key={item} active={index === slideIndex}>
      <Image alt="wallpaper" src={item} onClick={incrementSlideIndex}></Image>
    </CarouselItem>
  ));

  return (
    <HomeWrapper>
      <Carousel>
        <CarouselItems>{carouselItems}</CarouselItems>
      </Carousel>
    </HomeWrapper>
  );
};

export default Home;
