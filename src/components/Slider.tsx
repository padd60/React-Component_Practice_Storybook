import styled from 'styled-components';
import {
  ChangeEvent,
  useCallback, useEffect, useRef, useState,
} from 'react';

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 16px;
`;

const Rail = styled.div`
  position: absolute;
  top: 6px;
  left: 0;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #aaa;
`;

const Handle = styled.div`
  position: absolute;
  top: 8px;
  left: 0;
  width: 12px;
  height: 12px;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 2px solid #44b;
  border-radius: 50%;
  cursor: grab;
`;

const Track = styled.div`
  position: absolute;
  top: 6px;
  left: 0;
  width: 0;
  height: 4px;
  background-color: #44b;
  border-radius: 2px;
`;

const Slider = ({
  min = 0,
  max = 100,
  step = 0.1,
  defaultValue,
  onChange,
  ...props
}:any) => {
  const sliderRef:React.MutableRefObject<HTMLDivElement | null> = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [value, setValue] = useState(defaultValue || min);

  const handleMouseDown = useCallback(
    () => {
      setDragging(true);
    },
    [],
  );

  const handleMouseup = useCallback(
    () => {
      setDragging(false);
    },
    [],
  );

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      if (!dragging) return;
      if (!sliderRef.current) return;

      const handleOffset = e.pageX - sliderRef.current.offsetLeft;
      const sliderWidth = sliderRef.current.offsetWidth;

      const track = handleOffset / sliderWidth;
      let newValue;
      if (track < 0) {
        newValue = min;
      } else if (track > 1) {
        newValue = max;
      } else {
        newValue = Math.round((min + (max - min) * track) / step) * step;
        newValue = Math.min(max, Math.max(min, newValue));
      }

      setValue(newValue);
      // eslint-disable-next-line no-unused-expressions
      onChange && onChange(newValue);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseup);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseup);
    };
  }, [value, min, max, dragging, sliderRef, handleMouseup, onChange, step]);

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <SliderContainer ref={sliderRef} {...props}>
      <Rail />
      <Track
        style={{ width: `${percentage}%` }}
      />
      <Handle
        onMouseDown={handleMouseDown}
        style={{ left: `${percentage}%` }}
      />
    </SliderContainer>
  );
};

export default Slider;
