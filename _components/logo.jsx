import * as React from "react";
import Svg, { Path } from "react-native-svg";
import credit from "../_styles/creditcardStyle";
const Logo = (props) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    className="logo"
    viewBox="0 0 48 48"
    {...props}
    style={credit.CreditCard.logo}
  >
    <Path fill="#ff9800" d="M32 10a14 14 0 1 0 0 28 14 14 0 1 0 0-28Z" />
    <Path fill="#d50000" d="M16 10a14 14 0 1 0 0 28 14 14 0 1 0 0-28Z" />
    <Path
      fill="#ff3d00"
      d="M18 24c0 4.755 2.376 8.95 6 11.48 3.624-2.53 6-6.725 6-11.48s-2.376-8.95-6-11.48c-3.624 2.53-6 6.725-6 11.48z"
    />
  </Svg>
);
export default Logo;