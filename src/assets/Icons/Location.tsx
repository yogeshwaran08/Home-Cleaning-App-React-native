import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';
const LocationIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <G fill="#394240">
      <Path d="M32 0C18.745 0 8 10.745 8 24c0 5.678 2.502 10.671 5.271 15l17.097 24.156a2 2 0 0 0 3.264 0L50.729 39C53.375 35.438 56 29.678 56 24 56 10.745 45.255 0 32 0zm16.087 39h-.01L32 61 15.923 39h-.01C13.469 35.469 10 29.799 10 24c0-12.15 9.85-22 22-22s22 9.85 22 22c0 5.799-3.719 11.781-5.913 15z" />
      <Path d="M32 14c-5.523 0-10 4.478-10 10s4.477 10 10 10 10-4.478 10-10-4.477-10-10-10zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
      <Path d="M32 10c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14-6.268-14-14-14zm0 26c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12z" />
    </G>
    <G fill="#F76D57">
      <Path d="M32 12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.522 0-10-4.477-10-10s4.478-10 10-10 10 4.477 10 10-4.478 10-10 10z" />
      <Path d="M32 2c-12.15 0-22 9.85-22 22 0 5.799 3.469 11.469 5.913 15h.01L32 61l16.077-22h.01C50.281 35.781 54 29.799 54 24c0-12.15-9.85-22-22-22zm0 36c-7.732 0-14-6.268-14-14s6.268-14 14-14 14 6.268 14 14-6.268 14-14 14z" />
    </G>
    <Path
      fill="#231F20"
      d="M32 12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.522 0-10-4.477-10-10s4.478-10 10-10 10 4.477 10 10-4.478 10-10 10z"
      opacity={0.2}
    />
  </Svg>
);
export default LocationIcon;
