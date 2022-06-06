/* eslint-disable no-underscore-dangle */
import React from 'react';

const AvatarGroup = ({
  children,
  shape = 'circle',
  size = 70,
  ...props
}:any) => {
  const avatarArray: React.ReactElement[] = React.Children.toArray(children)
    .filter((element) => {
      if (React.isValidElement(element) && element.props.__TYPE === 'Avatar') {
        return true;
      }
      return false;
    })
    .map((avatar, index, avatars) => {
      return React.cloneElement(avatar as React.ReactElement, {
        ...(avatar as React.ReactElement).props,
        size,
        shape,
        style: {
          ...(avatar as React.ReactElement).props.style,
          marginLeft: -size / 5,
          zIndex: avatars.length - index,
        },
      });
    });

  return (
    <div style={{ paddingLeft: size / 5 }}>{avatarArray}</div>
  );
};

export default AvatarGroup;
