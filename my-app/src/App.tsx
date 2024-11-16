import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/home";
import MainLayout from "./components/container/MainLayout.tsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </>
    )
}

export default App