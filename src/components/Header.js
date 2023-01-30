import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/logo.png"
import { InfoContext } from "../context/info"
import { api } from "../services/auth"

export default function Header() {
    const navigate = useNavigate()
    const { UserData, setUserData } = useContext(InfoContext)
    function signout() {
        localStorage.clear()
        setUserData({})
        navigate('/')
    }
    return (
        <StyleHeader>
            <Logo onClick={() => navigate("/")}>
                <img src={logo} alt={"Logo"}/>
                <h1>Toca do Coelho</h1>
            </Logo>
            <Login onClick={() => UserData.nome ? navigate("/") : navigate("/login")}>
                <div>
                    {UserData.nome ?
                        <p>{UserData.nome.split(" ")[0]}</p>
                        : <>
                            <p>Login</p>
                            <p>Cadastro</p>
                        </>
                    }
                </div>
                {!UserData.token ? <ion-icon name="person-outline"></ion-icon>
                    : <ion-icon onClick={signout} name="log-out-outline" />
                }
            </Login>
            <Promo>
                <hr />
                <h2>FRETE GRÁTIS PARA TODO BRASIL</h2>
                <hr />
            </Promo>
        </StyleHeader>
    )
}

const StyleHeader = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 106px;
    background: #437313;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: #437313;
    color: #C0E699;
`

const Logo = styled.div`
    position: absolute;
    top: 15%;
    left: 0%;
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    h1{
        font-family: 'Rosarivo';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 24px;
    }
    img{
        width: 56px;
        height: 51px;
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
    cursor: pointer;
    ion-icon{
        font-size: 35px;
    }
    p{
        font-size: 12px;
    }
`

const Promo = styled.div`
    background-color: #d6ffad;
    height: 20px;
    position: absolute;
    bottom:-17px;
    margin: auto;
    width: 100.48%;
    display: flex;
    flex-direction: column;
    font-family: 'Raleway';
    h2{
        margin: auto;
        font-size: 12px;
        line-height: 14px;
        color: #000000;
    }
    >hr{
        position: absolute;
        width: 100vw;
        border: 0;
        border: 1px solid #000000;
        bottom: -40%;
        z-index: 3;
    }
    hr{
        position: absolute;
        width: 100vw;
        border: 0;
        border: 1px solid #000000;
        top:-40%;
    }
`