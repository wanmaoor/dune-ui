import React from "react";
import ReactDOM from 'react-dom'
import { Icon } from "../lib/index";

const App = () => {
  return (
    <>
      <h1>新增文字</h1>
      <h2>又新增了一次</h2>
      <Icon name={'alipay'} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
