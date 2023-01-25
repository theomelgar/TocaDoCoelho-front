import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import styled from "styled-components";

export default function Produtos() {
    return (
        <StyleProdutos>
            <Header>
                
            </Header>
            <p>
                Lista de produtos ...
            </p>
            <Footer>
                
            </Footer>
        </StyleProdutos>
    )
}

const StyleProdutos = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`