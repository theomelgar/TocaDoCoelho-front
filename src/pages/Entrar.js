import styled from "styled-components";
import Header from "../components/Header.js";
import Logar from "../components/Login.js";

export default function Entrar() {
    return (
        <StyleLogar>
            <Header></Header>
            <Logar></Logar>
        </StyleLogar>
    )
}

const StyleLogar = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`