import { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

type ContainerProps = {
  width?: string;
  height?: string;
  delay?: number;
  translation?: number;
};

const SliderWrapper = styled.div<{ width?: string; height?: string }>`
  width: ${(props) => props.width || '100%'};
  height: auto;
  position: relative;
  overflow: hidden;
`;

const SlideContainer = styled.div<ContainerProps>`
  display: flex;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  transition: transform ${(props) => `${props.delay || 0.5}s`} ease;
  transform: translateX(-${(props) => props.translation}px);
`;

const Slide = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
`;

const Control = styled.button<{ direction: 'right' | 'left' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.direction === 'right' ? 'right: 25px' : 'left: 25px')};
  cursor: pointer;
  z-index: 3;
`;

const Arrow = styled.div<{ direction: 'right' | 'left' }>`
  border: solid #333;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin-bottom: 0;
  transform: ${(props) => (props.direction === 'right' ? 'rotate(-45deg)' : 'rotate(135deg)')};
`;

type Props = {
  children: JSX.Element[];
  width?: string;
  height?: string;
  delay?: number;
};

const Slider = (props: Props) => {
  const { children, width, height, delay } = props;
  const [length] = useState<number>(children.length);
  const [translation, setTranslation] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (slideRef.current?.clientWidth) {
      const slideWidth = slideRef.current?.clientWidth;
      setTranslation(slideWidth * currentSlide);
    }
  }, [currentSlide]);

  const handleAutoSlide = useCallback(() => {
    if (currentSlide >= 0 && currentSlide < length - 1) setCurrentSlide(currentSlide + 1);
    else setCurrentSlide(0);
  }, [length, currentSlide]);

  useEffect(() => {
    const timerId = setInterval(() => handleAutoSlide(), 3000);
    return () => clearInterval(timerId);
  }, [handleAutoSlide]);

  const handlePreviousSlider = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
    else setCurrentSlide(length - 1);
  };

  const handleNextSlider = () => {
    if (currentSlide < length - 1) setCurrentSlide(currentSlide + 1);
    else setCurrentSlide(0);
  };

  return (
    <SliderWrapper width={width} height={height}>
      <SlideContainer width={width} height={height} delay={delay} translation={translation}>
        {children.map((child, index) => (
          <Slide className='slide' key={index} ref={slideRef}>
            {child}
          </Slide>
        ))}
      </SlideContainer>

      <Control direction='left' onClick={handlePreviousSlider}>
        <Arrow direction='left' />
      </Control>

      <Control direction='right' onClick={handleNextSlider}>
        <Arrow direction='right' />
      </Control>
    </SliderWrapper>
  );
};

export default Slider;
