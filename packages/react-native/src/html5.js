import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Html5Icon = (props) => (
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
      d="M1.94141 1H22.059L20.9614 20.2076L12.0002 23.568L3.03898 20.2076L1.94141 1ZM4.05895 3L4.96138 18.7924L12.0002 21.432L19.039 18.7924L19.9414 3H4.05895ZM5.66992 5H18.3304L18.215 7.01719L16.4952 7H7.78747L7.98043 10.3768L18.0231 10.3768L17.6183 17.4612L12.0002 19.568L6.38199 17.4612L6.1884 14.0734H8.2117L8.25566 15.1933L8.30439 16.0461L12.0002 17.432L15.6959 16.0461L15.9055 12.3768L6.09145 12.3768L5.66992 5Z"
      fill="currentColor"
    />
  </Svg>
);
export { Html5Icon };

export default Html5Icon;
