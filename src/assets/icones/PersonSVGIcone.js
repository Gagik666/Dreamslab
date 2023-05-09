import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const PersonSVGIcone = (props) =>  {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 15.503A5.041 5.041 0 1016 5.42a5.041 5.041 0 000 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
    </Svg>
  )
}