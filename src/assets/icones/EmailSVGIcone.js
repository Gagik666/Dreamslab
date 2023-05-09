import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const EmailSVGIcone = (props) => {
  return (
    <Svg
      fill="#000"
      height={20}
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      {...props}
    >
      <Path d="M496.327 127.091l-15.673 9.613L281.83 258.623c-7.983 4.859-16.917 7.293-25.84 7.293s-17.826-2.424-25.778-7.262l-.136-.084L31.347 134.771l-15.673-9.759L0 115.242v302.717h512V117.488l-15.673 9.603z" />
      <Path d="M25.245 94.041l25.161 15.673 25.161 15.673 171.008 106.527a18.182 18.182 0 0018.913-.042L439.14 125.386l25.558-15.673 25.558-15.673H25.245z" />
    </Svg>
  )
}