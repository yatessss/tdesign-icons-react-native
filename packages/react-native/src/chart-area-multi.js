import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChartAreaMultiIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(0, 0, 0, 0.9)"
    {...props}
  >
    <Path
      d="M4 2V20H22V22H2V2H4ZM21.0003 4.08648L21.0003 18.2096L6.00026 18.2096L6.00026 12.0581L12.5891 6.06741L15.5565 9.52937L21.0003 4.08648ZM8.25816 16.2096L19.0003 16.2096L19.0003 12.4141L15.2695 16.1446L12.2357 12.6052L8.25816 16.2096ZM19.0003 9.58576V8.91438L15.4435 12.4706L12.4109 8.93259L8.00026 12.9428L8.00026 13.7443L12.4162 9.74264L15.3825 13.2033L19.0003 9.58576Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChartAreaMultiIcon };

export default ChartAreaMultiIcon;
