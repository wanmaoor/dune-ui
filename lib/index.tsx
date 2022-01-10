import React from 'react'
import ReactDOM from "react-dom";
import Button from "./Button";
import Icon from "./icon/Icon";
const handleClick: React.MouseEventHandler<SVGElement> = (e) => {
  console.log('e: ', e)
}
const App = () => {
  return (
    <>
      <Button />
      <Icon name={'alipay'} onClick={handleClick} className={'xxx'} />
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))
