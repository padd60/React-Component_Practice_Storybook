import styled from 'styled-components';
import {
  useEffect, useState,
} from 'react';
import ImageComponent from './Image';
import AvatarGroup from './AvatarGroup';

const ShapeToCssValue:{
  [index: string]: string,
} = {
  circle: '50%',
  round: '4px',
  square: '0px',
};

const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid #dadada;
  border-radius: ${({ shape }:{shape:string}) => ShapeToCssValue[shape]};
  overflow: hidden;

  > img {
    transition: opacity 0.2s ease-out;
    background-color: #eee;
  }
`;

const Avatar = ({
  lazy,
  threshold,
  src,
  size = 70,
  shape = 'circle',
  placeholder,
  alt,
  mode = 'dover',
  __TYPE,
  ...props
}:any) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();

    image.src = src;
    image.onload = () => setLoaded(true);
  }, [src]);

  return (
    <AvatarWrapper {...props} shape={shape}>
      <ImageComponent
        alt={alt}
        block
        height={size}
        lazy={lazy}
        mode={mode}
        placeholder={placeholder}
        src={src}
        style={{ opacity: loaded ? 1 : 0 }}
        threshold={threshold}
        width={size}
      />
    </AvatarWrapper>
  );
};

Avatar.defaultProps = { __TYPE: 'Avatar' };

Avatar.propTypes = { __TYPE: 'Avatar' };

Avatar.Group = AvatarGroup;

export default Avatar;
