import {ReactNode} from "react";

interface Props{
    // text :string;
    children : ReactNode;
}


const Alert = ({children}:Props) => {
  return (
    <div>{children}</div>
  )
}

export default Alert
