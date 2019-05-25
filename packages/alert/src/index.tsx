import * as React from "react"
import {Icon} from "@scope/icon"
import {Button} from "@scope/button"

export const Alert: React.FC = ({children}) => {
  return (
    <div>
      <Icon />
      <span>{children}</span>
      <Button>Close</Button>
    </div>
  )
}
