import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CooperateIcon = (props) => (
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
      d="M9.00015 1.58594L12.0002 4.58594L15.0002 1.58594L23.9144 10.5002L12.0002 22.4144L0.0859375 10.5002L9.00015 1.58594ZM10.5859 6.00015L9.00015 4.41436L2.91436 10.5002L12.0002 19.5859L12.9543 18.6318L10.5859 16.2634L12.0002 14.8492L14.3685 17.2176L15.3227 16.2634L12.9543 13.8951L14.3685 12.4808L16.7369 14.8492L18.0859 13.5002L15.0002 10.4144L12.0002 13.4144L7.58594 9.00015L10.5859 6.00015ZM19.5002 12.0859L21.0859 10.5002L15.0002 4.41436L10.4144 9.00015L12.0002 10.5859L15.0002 7.58594L19.5002 12.0859Z"
      fill="currentColor"
    />
  </Svg>
);
export { CooperateIcon };

export default CooperateIcon;
