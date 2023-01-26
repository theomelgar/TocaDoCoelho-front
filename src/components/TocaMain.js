import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InfoProvider } from "../context/info";
import Produtos from "../pages/Produtos";
import Cadastro from "../pages/Cadastro";
import Entrar from "../pages/Entrar";

export default function TocaMain() {

    return (
        <BrowserRouter>
            <InfoProvider>
                <Routes>
                    <Route path="/" element={<Produtos />} />
                    <Route path="/produtos/:id" />
                    <Route path="/carrinho" />
                    <Route path="/finalizar" />
                    <Route path="/login" element={<Entrar />}/>
                    <Route path="/cadastro" element={<Cadastro/>} />
                </Routes>
            </InfoProvider>
        </BrowserRouter>
    )
}