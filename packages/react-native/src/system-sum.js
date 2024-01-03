import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SystemSumIcon = (props) => (
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
      d="M13.5266 5.69337C14.3427 6.35784 15.1567 7.09183 15.9514 7.88659C16.746 8.68114 17.4798 9.49486 18.1441 10.3108C18.7149 9.43817 19.1779 8.59574 19.5225 7.81242C19.9773 6.77877 20.2042 5.89754 20.2328 5.21439C20.2615 4.53241 20.093 4.15535 19.8875 3.94993C19.6821 3.7445 19.305 3.57598 18.6231 3.60461C17.9399 3.63328 17.0587 3.86012 16.025 4.31493C15.2417 4.6596 14.3992 5.1226 13.5266 5.69337ZM11.8389 4.41972C13.0019 3.61065 14.1454 2.95691 15.2196 2.4843C16.3866 1.97079 17.5214 1.64909 18.5392 1.60637C19.5581 1.5636 20.5669 1.80085 21.3017 2.53571C22.0366 3.27058 22.2738 4.27934 22.2311 5.29827C22.1884 6.31604 21.8667 7.45083 21.3532 8.6179C20.8806 9.69197 20.2269 10.8354 19.4178 11.9984C20.2271 13.1616 20.881 14.3054 21.3537 15.3797C21.8672 16.5468 22.1889 17.6816 22.2317 18.6993C22.2744 19.7183 22.0372 20.727 21.3023 21.4619C20.5675 22.1968 19.5587 22.434 18.5398 22.3912C17.522 22.3485 16.3872 22.0268 15.2201 21.5133C14.1459 21.0406 13.0021 20.3867 11.8389 19.5775C10.6758 20.3867 9.53203 21.0406 8.45774 21.5133C7.29067 22.0268 6.15588 22.3485 5.13811 22.3912C4.11918 22.434 3.11042 22.1968 2.37556 21.4619C1.64069 20.727 1.40345 19.7183 1.44621 18.6993C1.48893 17.6816 1.81063 16.5468 2.32415 15.3797C2.79685 14.3054 3.45076 13.1616 4.26006 11.9984C3.45103 10.8354 2.79732 9.69197 2.32473 8.6179C1.81122 7.45083 1.48952 6.31604 1.4468 5.29827C1.40403 4.27934 1.64128 3.27058 2.37614 2.53571C3.11101 1.80085 4.11976 1.5636 5.13869 1.60637C6.15647 1.64909 7.29126 1.97079 8.45833 2.4843C9.53243 2.95691 10.676 3.61065 11.8389 4.41972ZM5.53375 10.3108C6.19807 9.49486 6.93189 8.68114 7.72644 7.88659C8.5212 7.09183 9.33514 6.35783 10.1513 5.69337C9.27865 5.1226 8.43619 4.6596 7.65285 4.31493C6.6192 3.86012 5.73796 3.63328 5.05482 3.60461C4.37284 3.57598 3.99578 3.7445 3.79036 3.94993C3.58493 4.15535 3.41641 4.53241 3.44504 5.21439C3.47371 5.89754 3.70055 6.77877 4.15536 7.81242C4.50002 8.59574 4.963 9.43817 5.53375 10.3108ZM6.74564 11.9984C7.44705 12.8956 8.24907 13.8046 9.14123 14.6968C10.0332 15.5887 10.942 16.3906 11.8389 17.0919C12.7359 16.3906 13.6447 15.5887 14.5366 14.6968C15.4288 13.8046 16.2308 12.8956 16.9322 11.9984C16.231 11.1015 15.4291 10.1927 14.5372 9.30081C13.6451 8.40867 12.7361 7.60667 11.8389 6.90528C10.9418 7.60667 10.0328 8.40867 9.14065 9.30081C8.24873 10.1927 7.44691 11.1015 6.74564 11.9984ZM5.53368 13.686C4.9627 14.5589 4.49954 15.4016 4.15478 16.1852C3.69997 17.2188 3.47313 18.1001 3.44445 18.7832C3.41583 19.4652 3.58434 19.8423 3.78977 20.0477C3.9952 20.2531 4.37225 20.4216 5.05424 20.393C5.73738 20.3643 6.61861 20.1375 7.65227 19.6827C8.4358 19.3379 9.27848 18.8748 10.1514 18.3038C9.33538 17.6395 8.52162 16.9056 7.72702 16.111C6.93221 15.3162 6.19818 14.5022 5.53368 13.686ZM13.5265 18.3038C14.3994 18.8748 15.2421 19.3379 16.0256 19.6827C17.0593 20.1375 17.9405 20.3643 18.6236 20.393C19.3056 20.4216 19.6827 20.2531 19.8881 20.0477C20.0935 19.8423 20.2621 19.4652 20.2334 18.7832C20.2048 18.1001 19.9779 17.2188 19.5231 16.1852C19.1783 15.4016 18.7152 14.5589 18.1442 13.686C17.4797 14.5022 16.7457 15.3162 15.9509 16.111C15.1563 16.9056 14.3425 17.6395 13.5265 18.3038ZM11.0001 10.9998H13.004V13.0037H11.0001V10.9998Z"
      fill="currentColor"
    />
  </Svg>
);
export { SystemSumIcon };

export default SystemSumIcon;
