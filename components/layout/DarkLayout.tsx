import { FC, ReactNode } from "react"

interface ChildrenProps {
  children?: ReactNode;
}
export const DarkLayout:FC<ChildrenProps> = ({children}) => {

  return (
    <div style={{
        backgroundColor:"rgba(0, 0, 0, 0.3)",
        borderRadius: "5px",
        padding: '10px',
    }}>
        <h3>Dark Layout</h3>
        <div >
            {children}

        </div>

    </div>
  )
}
