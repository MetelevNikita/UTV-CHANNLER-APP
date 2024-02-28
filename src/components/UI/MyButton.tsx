import { CSSProperties, FC } from 'react'

//


interface Button {

  title: string
  onClick: () => void
  style?: CSSProperties

}

const MyButton: FC<Button> = ({ onClick, title, style }) => {
  return (
    <button style={style} onClick={onClick}>{title}</button>
  )
}


export default MyButton
