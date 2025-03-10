import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LogoGitlabIcon = (props) => (
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
      d="M4.77923 1H6.71559L9.21559 8.33333H14.7844L17.2844 1H19.2207L23.6748 14.3621L12 23.2572L0.325195 14.3621L4.77923 1ZM5.75783 4.38876L2.67478 13.6379L12 20.7428L21.3252 13.6379L18.2421 4.38876L16.2156 10.3333H7.78438L5.75783 4.38876Z"
      fill="currentColor"
    />
  </Svg>
);
export { LogoGitlabIcon };

export default LogoGitlabIcon;
