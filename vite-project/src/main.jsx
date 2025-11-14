import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseState from './components/UseState-count.jsx'
import Countdown from './components/countdown.jsx'
import LoginForm from './components/login-form.jsx'
import ProjectWizzy from './Project-Wizzy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UseState /> */}
    {/* <LoginForm /> */}
    {/* <Countdown /> */}
    <ProjectWizzy />
  </StrictMode>,
)
