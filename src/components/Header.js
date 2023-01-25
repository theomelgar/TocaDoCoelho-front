import styled from "styled-components"
import logo from "../assets/logo.png"
export default function Header() {
    return (
        <StyleHeader>
            <h1>Toca do Coelho</h1>
            <img src={logo} />
            <Login>
                <div>
                    <p>Login</p>
                    <p>Cadastro</p>
                </div>
                <ion-icon name="person-outline"></ion-icon>
            </Login>
        </StyleHeader>
    )
}

const StyleHeader = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 106px;
    background: #437313;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: #437313;
    color: #C0E699;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        position: absolute;
        top: 55%;
        left: 1%;
        font-family: 'Rosarivo';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 24px;
    }
    img{
        width: 121px;
        height: 107px;
    }
`

const Login = styled.div`
    position: absolute;
    width: 100px;
    height: 76px;
    top: 18%;
    right: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
    ion-icon{
        font-size: 35px;
    }
    p{
        font-size: 12px;
    }
`
