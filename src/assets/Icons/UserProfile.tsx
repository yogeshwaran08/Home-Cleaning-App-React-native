import * as React from 'react';
import Svg, {SvgProps, Defs, G, Path, Circle} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */
const UserIcon = (props: SvgProps) => (
  <Svg width={800} height={800} viewBox="0 0 48 48" {...props}>
    <Defs></Defs>
    <G id="hair">
      <Path
        d="M44.5 44.23h-41c0-7.07 3.17-12.81 10.25-12.81h20.5c7.08 0 10.25 5.74 10.25 12.81Z"
        style={{
          fill: '#fc663d',
        }}
      />
      <Path
        d="M27.84 21.17V32.7a3.84 3.84 0 1 1-7.68 0V21.17Z"
        className="cls-2"
      />
      <Path
        d="M31.61 17.33a10.62 10.62 0 0 1-3.77 7.58v2.57a6 6 0 0 1-7.68 0v-2.57a10.62 10.62 0 0 1-3.77-7.58c.46-5 3.69-9 7.61-9s7.15 3.95 7.61 9Z"
        style={{
          fill: '#f4b392',
        }}
      />
      <Path
        d="M31.69 16.05a10.73 10.73 0 0 1-.08 1.28 10.62 10.62 0 0 1-3.77 7.58 6 6 0 0 1-7.68 0 10.62 10.62 0 0 1-3.77-7.58 10.73 10.73 0 0 1-.08-1.28c0-5.67 3.44-10.25 7.69-10.25s7.69 4.58 7.69 10.25Z"
        className="cls-2"
      />
      <Path
        d="M34.25 16.05a2.56 2.56 0 0 1-2.56 2.56c-1.42 0 0-1.15 0-2.56s-1.42-2.57 0-2.57a2.57 2.57 0 0 1 2.56 2.57ZM13.75 16.05a2.56 2.56 0 0 0 2.56 2.56c1.42 0 0-1.15 0-2.56s1.42-2.57 0-2.57a2.57 2.57 0 0 0-2.56 2.57Z"
        className="cls-2"
      />
      <Circle cx={20.93} cy={13.74} r={0.51} className="cls-4" />
      <Circle cx={27.08} cy={13.74} r={0.51} className="cls-4" />
      <Path
        d="M19.13 12.2s1.74-2 3.59-1M28.87 12.2s-1.74-2-3.59-1M23.49 14.25s-2 5.13-1 5.13h1M23.49 21.43s3.07 0 4.1-1"
        className="cls-5"
      />
      <Path
        d="m17 14 1-4h12l1 4s2-5 2-8-18-3-18 0 2 8 2 8Z"
        className="cls-4"
      />
    </G>
  </Svg>
);
export default UserIcon;
