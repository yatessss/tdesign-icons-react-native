import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DamIcon = (props) => (
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
      d="M12 0.671387L21 8.54639V20.0002H22V22.0002H13V20.0002H14V10.0002H10V20.0002H11V22.0002H2V20.0002H3V8.54639L12 0.671387ZM5.00079 20.0002H7.99921L8 10.0002H5L5.00079 20.0002ZM6.66145 8.00015H17.3386L12 3.32892L6.66145 8.00015ZM19 10.0002H16V20.0002H19L19 10.0002Z"
      fill="currentColor"
    />
  </Svg>
);
export { DamIcon };

export default DamIcon;
