import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css' // 활성화하면 App.css와 충돌

// 가장 최상위의 컴포넌트 => App(App.jsx)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
