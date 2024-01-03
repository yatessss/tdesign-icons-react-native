import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SoundIcon = (props) => (
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
      d="M15 1.29004V22.7095L5.7369 17.4998L1 17.4998L1 6.49976H5.7369L15 1.29004ZM4.99882 8.49976H3L3 15.4998L4.99882 15.4998L4.99882 8.49976ZM6.99882 15.9149L13 19.29V4.70949L6.99882 8.08465V15.9149ZM20.9791 6.98155L21.5818 7.77956C22.4998 8.99522 22.9963 10.4772 22.9958 12.0006C22.9952 13.5239 22.4977 15.0056 21.5788 16.2206L20.9756 17.0182L19.3805 15.8117L19.9837 15.0142C20.64 14.1463 20.9954 13.088 20.9958 11.9999C20.9961 10.9117 20.6415 9.85319 19.9858 8.98486L19.3831 8.18686L20.9791 6.98155ZM18.1864 9.09068L18.7891 9.88869C19.2481 10.4965 19.4963 11.2375 19.496 11.9992C19.4958 12.7609 19.247 13.5017 18.7876 14.1092L18.1844 14.9068L16.5892 13.7004L17.1924 12.9028C17.3893 12.6424 17.4959 12.3249 17.496 11.9985C17.4962 11.6721 17.3898 11.3545 17.1931 11.094L16.5904 10.296L18.1864 9.09068Z"
      fill="currentColor"
    />
  </Svg>
);
export { SoundIcon };

export default SoundIcon;
