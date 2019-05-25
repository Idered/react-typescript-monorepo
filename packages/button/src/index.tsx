import * as React from "react"

const styles = {
  button: {
    border: "1px solid lavender",
    backgroundColor: "ghostwhite"
  }
}

export const Button: React.FC = ({children}) => (
  <button style={styles.button}>{children}</button>
)
