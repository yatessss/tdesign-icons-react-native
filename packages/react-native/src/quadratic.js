import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const QuadraticIcon = (props) => (
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
      d="M11.2533 3H23V5H12.7467L7.88216 21.4178L3.66667 14.6429H1V12.6429H4.77778L7.22895 16.5822L11.2533 3ZM22 9.99999L22 12.1363C22 12.7327 21.7339 13.298 21.2742 13.6779L19.0696 15.5L21.2742 17.3221C21.7338 17.702 22 18.2673 22 18.8637L22 21L20 21L20 18.8637L17.5 16.7974L15 18.8637L15 21L13 21L13 18.8637C13 18.2673 13.2662 17.702 13.7258 17.3221L15.9304 15.5L13.7258 13.6779C13.2662 13.298 13 12.7327 13 12.1363L13 10L15 10L15 12.1363L17.5 14.2026L20 12.1363L20 10L22 9.99999Z"
      fill="currentColor"
    />
  </Svg>
);
export { QuadraticIcon };

export default QuadraticIcon;
