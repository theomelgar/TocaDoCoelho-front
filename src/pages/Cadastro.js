import styled from "styled-components";
import Header from "../components/Header.js";
import Cadastrar from "../components/Cadastro.js";

export default function Cadastro() {
    return (
        <StyleCadastro>
            <Header></Header>
            <Cadastrar></Cadastrar>
        </StyleCadastro>
    )
}

const StyleCadastro = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`