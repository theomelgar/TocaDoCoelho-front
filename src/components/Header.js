import styled from "styled-components"
import logo from "../assets/logo.png"
export default function Header() {
    return (
        <StyleHeader>
            <h1>Toca do Coelho</h1>
            <img src={logo} />
            <p>Login/Cadastro</p>
            <ion-icon name="person-outline"></ion-icon>
        </StyleHeader>
    )
}

const StyleHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 106px;
    background: #437313;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: #437313;
    color: #C0E699;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        font-family: "Rosarvio";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
    }
    p{
        font-size: 14px;
    }
    img{
        width: 121px;
        height: 107px;
    }
    ion-icon{
        font-size: 35px;
    }
`