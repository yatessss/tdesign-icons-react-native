import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FlightLandingIcon = (props) => (
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
      d="M9.30175 1.20264L13.0176 2.1983L15.5835 11.168L20.5424 12.4968C21.8761 12.8541 22.6675 14.225 22.3102 15.5586C21.9528 16.8923 20.582 17.6838 19.2483 17.3264L1.55273 12.5849L2.01217 5.46106L5.1862 6.31154L5.82767 8.55397L9.16304 9.44768L9.30175 1.20264ZM11.2584 3.79747L11.1197 12.0425L4.21624 10.1927L3.80409 8.75196L3.65411 11.0774L19.7659 15.3945C20.0327 15.466 20.3068 15.3077 20.3783 15.041C20.4498 14.7743 20.2915 14.5001 20.0248 14.4286L13.9721 12.8068L11.4062 3.83707L11.2584 3.79747ZM1.99991 19.0001H21.9999V21.0001H1.99991V19.0001Z"
      fill="currentColor"
    />
  </Svg>
);
export { FlightLandingIcon };

export default FlightLandingIcon;
