import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

export const PasswordSVGIcone = (props) =>  {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G data-name="Layer 2">
        <Path fill="none" data-name="invisible box" d="M0 0H48V48H0z" />
        <Path
          d="M39 18h-4v-5A11 11 0 0024 2h-2a11 11 0 00-11 11v5H7a2 2 0 00-2 2v24a2 2 0 002 2h32a2 2 0 002-2V20a2 2 0 00-2-2zm-24-5a7 7 0 017-7h2a7 7 0 017 7v5H15zm-1 22a3 3 0 113-3 2.9 2.9 0 01-3 3zm9 0a3 3 0 113-3 2.9 2.9 0 01-3 3zm9 0a3 3 0 113-3 2.9 2.9 0 01-3 3z"
          data-name="Layer 7"
        />
      </G>
    </Svg>
  )
}