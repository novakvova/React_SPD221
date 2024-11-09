import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";

//Починає працювати наш проект - початкова точна
createRoot(document.getElementById('root')!).render(
    <>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </>,
)
