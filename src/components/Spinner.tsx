import styled from 'styled-components';

type propsType = {
  size:number,
  color:string,
  loading: boolean,
}

const Icon = styled.i`
  display: inline-block;
  vertical-align: middle;
`;

const Spinner = ({
  size = 24, color = '#919EAB', loading = true, ...props
}:propsType) => {
  const sizeStyle = {
    width: size,
    height: size,
  };
  return loading ? (
    <Icon>
      <svg
        preserveAspectRatio="xMidYMid"
        style={sizeStyle}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g transform="rotate(0 50 50)">
          <rect fill={color} height="12" rx="3" ry="6" width="6" x="47" y="24">
            <animate attributeName="opacity" begin="-0.9166666666666666s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0" />
          </rect>
        </g>
        <g transform="rotate(30 50 50)">
          <rect fill={color} height="12" rx="3" ry="6" width="6" x="47" y="24">
            <animate attributeName="opacity" begin="-0.8333333333333334s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0" />
          </rect>
        </g>
        <g transform="rotate(60 50 50)">
          <rect fill={color} height="12" rx="3" ry="6" width="6" x="47" y="24">
            <animate attributeName="opacity" begin="-0.75s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0" />
          </rect>
        </g>
        <g transform="rotate(90 50 50)">
          <rect fill={color} height="12" rx="3" ry="6" width="6" x="47" y="24">
            <animate attributeName="opacity" begin="-0.6666666666666666s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0" />
          </rect>
        </g>
        <g transform="rotate(120 50 50)">
          <rect fill={color} height="12" rx="3" ry="6" width="6" x="47" y="24">
            <animate attributeName="opacity" begin="-0.5833333333333334s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0" />
          </rect>
        </g>
        <g transform="rotate(150 50 50)">
          <rect fill={color} height="12" rx="3" ry="6" width="6" x="47" y="24">
            <animate attributeName="opacity" begin="-0.5s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0" />
          </rect>
        </g>
        <g transform="rotate(180 50 50)">
          <rect fill={color} height="12" rx="3" ry="6" width="6" x="47" y="24">
            <animate attributeName="opacity" begin="-0.4166666666666667s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0" />
          </rect>
        </g>
        <g transform="rotate(210 50 50)">
          <rect fill={color} height="12" rx="3" ry="6" width="6" x="47" y="24">
            <animate attributeName="opacity" begin="-0.3333333333333333s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0" />
          </rect>
        </g>
        <g transform="rotate(240 50 50)">
          <rect fill={color} height="12" rx="3" ry="6" width="6" x="47" y="24">
            <animate attributeName="opacity" begin="-0.25s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0" />
          </rect>
        </g>
        <g transform="rotate(270 50 50)">
          <rect fill={color} height="12" rx="3" ry="6" width="6" x="47" y="24">
            <animate attributeName="opacity" begin="-0.16666666666666666s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0" />
          </rect>
        </g>
        <g transform="rotate(300 50 50)">
          <rect fill={color} height="12" rx="3" ry="6" width="6" x="47" y="24">
            <animate attributeName="opacity" begin="-0.08333333333333333s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0" />
          </rect>
        </g>
        <g transform="rotate(330 50 50)">
          <rect fill={color} height="12" rx="3" ry="6" width="6" x="47" y="24">
            <animate attributeName="opacity" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0" />
          </rect>
        </g>
      </svg>
    </Icon>
  ) : null;
};

export default Spinner;
