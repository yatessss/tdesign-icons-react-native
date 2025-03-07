import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChartComboIcon = (props) => (
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
      d="M4 2V20H6V14H12V20H14V11H20V20H22V22H2V2H4ZM18 20V13H16V20H18ZM10 20V16H8V20H10ZM16.6734 3.72702L21.2462 8.29984L19.832 9.71406L16.669 6.55103L9.88707 13.2907L5.29307 8.69665L6.70728 7.28244L9.89148 10.4666L16.6734 3.72702Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChartComboIcon };

export default ChartComboIcon;
