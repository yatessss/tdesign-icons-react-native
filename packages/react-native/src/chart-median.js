import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChartMedianIcon = (props) => (
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
      d="M4 2V20H22V22H2V2H4ZM16 4.4043C14.9247 4.4043 14 5.31268 14 6.49953V9.49805H14.0039V11.502H14V14.5714C14 16.8877 12.3304 19 10 19C7.66961 19 6 16.8877 6 14.5714V13.5714H8V14.5714C8 16.0423 9.01668 17 10 17C10.9833 17 12 16.0423 12 14.5714V6.49953C12 4.26749 13.7616 2.4043 16 2.4043C18.2384 2.4043 20 4.26749 20 6.49953V7.49953H18V6.49953C18 5.31268 17.0753 4.4043 16 4.4043ZM6 9.49609H8.00391V11.5H6V9.49609ZM8.99609 9.49805H11V11.502H8.99609V9.49805ZM14.9961 9.49805H17V11.502H14.9961V9.49805ZM18 9.49805H20.0039V11.502H18V9.49805Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChartMedianIcon };

export default ChartMedianIcon;
