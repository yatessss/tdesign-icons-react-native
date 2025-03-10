import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Building2Icon = (props) => (
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
      d="M12 0.833984L18.372 4.65718L17.343 6.37216L17 6.16636V8.00017H22V22.0002H2V8.00017H7V6.16637L6.657 6.37216L5.62801 4.65718L12 0.833984ZM9 4.96637V8.00017H15V4.96637L12 3.16637L9 4.96637ZM11 4.99822H13.0039V7.00213H11V4.99822ZM4 10.0002V20.0002H8V13.0002H16V20.0002H20V10.0002H4ZM14 20.0002V15.0002H10V20.0002H14Z"
      fill="currentColor"
    />
  </Svg>
);
export { Building2Icon };

export default Building2Icon;
