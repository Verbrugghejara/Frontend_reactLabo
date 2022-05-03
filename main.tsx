import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './style/screen.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Settings from './screens/Settings'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="Settings" element={<Settings />} />
      </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
