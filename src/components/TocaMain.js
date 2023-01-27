import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InfoProvider } from "../context/info";
import Produtos from "../pages/Produtos";
import Carrinho from "../pages/Carrinho"

export default function TocaMain() {

    return (
        <BrowserRouter>
            <InfoProvider>
                <Routes>
                    <Route path="/" element={<Produtos />} />
                    <Route path="/produtos/:id" />
                    <Route path="/carrinho" element={<Carrinho/>} />
                    <Route path="/finalizar" />
                    <Route path="/login" />
                    <Route path="/cadastro" />
                </Routes>
            </InfoProvider>
        </BrowserRouter>
    )
}