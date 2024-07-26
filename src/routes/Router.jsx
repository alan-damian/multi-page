import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import Home from "../views/Home";
import Marketing from "../views/Marketing";
import Diseño from "../views/Diseño";
import Nosotros from "../views/Nosotros";

const Router = ()=>{
    return(
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/index" element={<Home/>} />
                    <Route path="/marketing" element={<Marketing/>} />
                    <Route path="/diseño" element={<Diseño/>} />
                    <Route path="/nosotros" element={<Nosotros/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )    
}

export default Router;