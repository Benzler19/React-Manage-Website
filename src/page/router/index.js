import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../homepage/index.js";


const route = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route index element={<Home />} path="/" />


            </Routes>
        </BrowserRouter>
    )
}

export default route