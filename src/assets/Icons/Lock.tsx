import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IconProps} from '../../config/types';

const LockIcon: React.FC<IconProps> = ({color = 'black', ...props}) => (
  <Svg width={48} height={48} viewBox="0 0 24 24" {...props}>
    <Path
      d="M12 1C8.676 1 6 3.676 6 7v1c-1.093 0-2 .907-2 2v10c0 1.093.907 2 2 2h12c1.093 0 2-.907 2-2V10c0-1.093-.907-2-2-2V7c0-3.324-2.676-6-6-6zm0 2c2.276 0 4 1.724 4 4v1H8V7c0-2.276 1.724-4 4-4zm-6 7h12v10H6V10zm6 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
      fill={color}
    />
  </Svg>
);
export default LockIcon;
