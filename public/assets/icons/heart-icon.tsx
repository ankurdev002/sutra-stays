import * as React from "react"
import { SVGProps } from "react"
const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='16px'
    height='16px'
    viewBox='0 0 0.3 0.3'
    id='heart'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
    className="translate-y-px"

  >
    <path d='M0.278 0.135c-0.023 0.045 -0.086 0.106 -0.121 0.139a0.01 0.01 0 0 1 -0.013 0C0.108 0.241 0.045 0.18 0.022 0.135 -0.03 0.036 0.1 -0.03 0.15 0.069c0.05 -0.099 0.18 -0.033 0.128 0.066' />
  </svg>
)
export default HeartIcon
