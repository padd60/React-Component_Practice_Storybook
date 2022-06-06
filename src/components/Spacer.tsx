import React from 'react';

const Spacer = ({
  children, type = 'horizontal', size = 8, ...props
}:any) => {
  const spaceStyle = {
    ...props.style,
    display: type === 'vertical' ? 'block' : 'inline-block',
    verticalAlign: type === 'horizontal' ? 'middle' : undefined,
  };

  const nodes = React.Children.toArray(children)
    .filter((element) => React.isValidElement(element))
    .map((element, index, elements) => {
      return React.cloneElement((element as React.ReactElement), {
        ...(element as React.ReactElement).props,
        style: {
          ...(element as React.ReactElement).props.style,
          marginRight: type === 'horizontal' && index !== elements.length - 1 ? size : undefined,
          marginBottom: type === 'vertical' && index !== elements.length - 1 ? size : undefined,
        },
      });
    });

  return (
    <div {...props} style={spaceStyle}>
      {nodes}
    </div>
  );
};

export default Spacer;
