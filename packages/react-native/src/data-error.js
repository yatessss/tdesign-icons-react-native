import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DataErrorIcon = (props) => (
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
      d="M2 2H22V14H20V13H4L4 20.0004H14V22.0004H2L2 2ZM4 11H20V4H4V11ZM5.99805 6.5H8.00195V8.50391H5.99805V6.5ZM16.8789 15.4644L19.0002 17.5858L21.1215 15.4644L22.5358 16.8787L20.4144 19L22.5358 21.1213L21.1215 22.5355L19.0002 20.4142L16.8789 22.5355L15.4647 21.1213L17.586 19L15.4647 16.8787L16.8789 15.4644ZM5.99805 15.5H8.00195V17.5039H5.99805V15.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { DataErrorIcon };

export default DataErrorIcon;
