import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InfoProvider } from "../context/info";
import { ItensProvider } from "../context/itens";
import IdProduto from "../pages/IdProduto";
import Produtos from "../pages/Produtos";
import Cadastro from "../pages/Cadastro";
import Entrar from "../pages/Entrar";

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
                        <Route path="/login" element={<Entrar />}/>
                        <Route path="/cadastro" element={<Cadastro/>} />
                    </Routes>
                </ItensProvider>
            </InfoProvider>
        </BrowserRouter>
    )
}