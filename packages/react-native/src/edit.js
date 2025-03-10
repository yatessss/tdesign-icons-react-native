import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const EditIcon = (props) => (
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
      d="M15.7478 2.94736C16.5289 2.16631 17.7952 2.16631 18.5763 2.94736L21.0511 5.42223C21.8322 6.20328 21.8322 7.46961 21.0511 8.25066L9.15806 20.1437L2.77832 21.2202L3.85476 14.8404L15.7478 2.94736ZM15.5192 6.00439L17.9941 8.47927L19.6369 6.83645L17.1621 4.36157L15.5192 6.00439ZM16.5799 9.89348L14.105 7.41861L5.72062 15.803L5.21828 18.7802L8.19549 18.2779L16.5799 9.89348Z"
      fill="currentColor"
    />
  </Svg>
);
export { EditIcon };

export default EditIcon;
