import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InfoProvider } from "../context/info";
import Produtos from "../pages/Produtos";

export default function TocaMain() {

    return (
        <BrowserRouter>
            <InfoProvider>
                <Routes>
                    <Route path="/" element={<Produtos />} />
                    <Route path="/produtos/:id" />
                    <Route path="/carrinho" />
                    <Route path="/finalizar" />
                    <Route path="/login" />
                    <Route path="/cadastro" />
                </Routes>
            </InfoProvider>
        </BrowserRouter>
    )
}