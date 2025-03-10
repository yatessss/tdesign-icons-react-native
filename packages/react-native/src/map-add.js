import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MapAddIcon = (props) => (
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
      d="M7.88647 1.85889L15.9717 5.39618L22 2.38204V11.0001H20V5.61811L17 7.11811V11.0001H15V7.15409L9 4.52909V15.382L11.3396 16.5518L10.4452 18.3407L8.04378 17.14L2 20.7663V5.97942L7.88647 1.85889ZM7 15.4339V4.92073L4 7.02073V17.2339L7 15.4339ZM19 12.0001V16.0001H23V18.0001H19V22.0001H17V18.0001H13V16.0001H17V12.0001H19Z"
      fill="currentColor"
    />
  </Svg>
);
export { MapAddIcon };

export default MapAddIcon;
