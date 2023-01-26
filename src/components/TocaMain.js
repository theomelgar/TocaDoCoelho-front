import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InfoProvider } from "../context/info";
import { ItensProvider } from "../context/itens";
import IdProduto from "../pages/IdProduto";
import Produtos from "../pages/Produtos";

export default function TocaMain() {

    return (
        <BrowserRouter>
            <InfoProvider>
                <ItensProvider>
                    <Routes>
                        <Route path="/" element={<Produtos />} />
                        <Route path="/produtos/:id" element={<IdProduto />} />
                        <Route path="/carrinho" />
                        <Route path="/finalizar" />
                        <Route path="/login" />
                        <Route path="/cadastro" />
                    </Routes>
                </ItensProvider>
            </InfoProvider>
        </BrowserRouter>
    )
}