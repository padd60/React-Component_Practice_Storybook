type propsType = {
  chidren: JSX.Element,
  type:string,
  size:number|string,
  style:any,
}

const Spacer = ({
  chidren, type = 'horizontal', size = 8, ...props
}:propsType) => {
  const spaceStyle = {
    ...props.style,
    display: type === 'vertical' ? 'block' : 'inline-block',
    verticalAlign: type === 'horizontal' ? 'middle' : undefined,
  };

  return (
    <div {...props} style={spaceStyle}>
      {chidren}
    </div>
  );
};

export default Spacer;
