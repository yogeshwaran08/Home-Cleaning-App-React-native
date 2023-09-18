import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IconProps} from '../../config/types';
import {ColorProperties} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const RightIcon: React.FC<IconProps> = ({color = 'black', ...props}) => (
  <Svg width={800} height={800} viewBox="-3 0 32 32" {...props}>
    <Path
      d="M13.11 29.113c7.243 0 13.113-5.871 13.113-13.113S20.353 2.887 13.11 2.887C5.868 2.887-.003 8.758-.003 16S5.868 29.113 13.11 29.113zm0-25.177c6.652 0 12.064 5.412 12.064 12.064S19.762 28.064 13.11 28.064C6.457 28.064 1.046 22.652 1.046 16S6.457 3.936 13.11 3.936z"
      fill={color}
    />
    <Path
      d="m13.906 21.637.742.742L21.026 16l-6.378-6.379-.742.742 5.112 5.112H6.291v1.049h12.727z"
      fill={color}
    />
  </Svg>
);
export default RightIcon;
