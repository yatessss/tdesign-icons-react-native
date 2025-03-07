import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChartAreaIcon = (props) => (
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
      d="M4 2V20H22V22H2V2H4ZM21.0003 4.08648L21.0003 18.2096L6.00026 18.2096L6.00026 12.0581L12.5891 6.06741L15.5565 9.52937L21.0003 4.08648ZM19.0003 8.91438L15.4435 12.4706L12.4109 8.93259L8.00026 12.9428L8.00026 16.2096L19.0003 16.2096L19.0003 8.91438Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChartAreaIcon };

export default ChartAreaIcon;
