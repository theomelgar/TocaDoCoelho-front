import styled from "styled-components";
import Header from "../components/Header.js";
import FinalizarCompra from "../components/Finalizar.js";
import Footer from "../components/Footer"

export default function Finalizar() {
    return (
        <StyleFinalizar>
            <Header></Header>
            <FinalizarCompra></FinalizarCompra>
            <Footer></Footer>
        </StyleFinalizar>
    )
}

const StyleFinalizar = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`