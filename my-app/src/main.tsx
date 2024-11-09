import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

//Починає працювати наш проект - початкова точна
createRoot(document.getElementById('root')!).render(
  <>
    <App />
  </>,
)
