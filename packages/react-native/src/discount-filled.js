import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DiscountFilledIcon = (props) => (
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
      d="M16.4737 7.52441C15.888 6.93862 14.9382 6.93862 14.3524 7.52441C13.7666 8.11019 13.7666 9.05994 14.3524 9.64573C14.9382 10.2315 15.888 10.2315 16.4737 9.64573C17.0595 9.05994 17.0595 8.11019 16.4737 7.52441Z"
      fill="currentColor"
    />
    <Path
      d="M22.0028 1.99757L22.811 12.5032L11.8791 23.435L0.56543 12.1213L11.4973 1.18945L22.0028 1.99757ZM13.292 6.46375C12.1205 7.63532 12.1205 9.53482 13.292 10.7064C14.4636 11.878 16.3631 11.878 17.5347 10.7064C18.7063 9.53482 18.7063 7.63532 17.5347 6.46375C16.3631 5.29218 14.4636 5.29218 13.292 6.46375Z"
      fill="currentColor"
    />
  </Svg>
);
export { DiscountFilledIcon };

export default DiscountFilledIcon;
