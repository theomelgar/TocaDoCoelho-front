import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InfoProvider } from "../context/info";
import { ItensProvider } from "../context/itens";
import IdProduto from "../pages/IdProduto";
import Produtos from "../pages/Produtos";
import Carrinho from "../pages/Carrinho"
import Cadastro from "../pages/Cadastro";
import Entrar from "../pages/Entrar";
import Finalizar from "../pages/Finalizar";

export default function TocaMain() {

    return (
        <BrowserRouter>
            <InfoProvider>


                <ItensProvider>
                    <Routes>
                        <Route path="/" element={<Produtos />} />
                        <Route path="/produtos/:id" element={<IdProduto />} />
                        <Route path="/finalizar" element={<Finalizar />}/>
                        <Route path="/carrinho" element={<Carrinho/>} />
                        <Route path="/login" element={<Entrar />}/>
                        <Route path="/cadastro" element={<Cadastro/>} />
                    </Routes>
                </ItensProvider>

            </InfoProvider>
        </BrowserRouter>
    )
}