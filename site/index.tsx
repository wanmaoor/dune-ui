import React from "react";
import ReactDOM from 'react-dom'
import { Link, Route, Routes, HashRouter as Router } from "react-router-dom";
import IconExample from "../lib/icon/Icon.example";

const App = () => {
  return (
    <Router>
      <div style={{display: 'grid', gridTemplateColumns: '30% 70%'}}>
        <div style={{borderRight: '1px solid red'}}>
          <ul>
            <li><Link to={'icon'}>icon组件</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path="/icon" element={<IconExample />} />
        </Routes>
      </div>
    </Router>

  )
}

ReactDOM.render(<App />, document.getElementById('app'))
