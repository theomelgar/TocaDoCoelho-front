import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Produto({p}){
    const navigate = useNavigate()

    return (
        <StyleProduto onClick={() => navigate(`/produtos/${p._id}`)}>
            <img src={p.foto} alt={"produto"}/>
            <h1>{p.nome}</h1>
            <h2>{p.obs}</h2>
            <p>R${p.valor}</p>
            <button>COMPRAR</button>
        </StyleProduto>
    )
}


const StyleProduto = styled.div`
    cursor: pointer;
    margin-top: 50px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;
    width: 172px;
    height: 216px;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    img{
        position: absolute;
        top: 0%;
        left: auto;
        width: 113.27px;
        height: 100px;
    }
    h1{
        position: absolute;
        top: 50%;
        left: 5%;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #274D00;
    }
    h2{
        position: absolute;
        top: 60%;
        left: 5%;
        font-size: 14px;
        line-height: 16px;
        color: #A6A6A6;
    }
    p{
        position: absolute;
        bottom: 10%;
        left: 3%;
        font-family: "Rubik";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #274D00;
    }
    button{
        position: absolute;
        bottom: 8%;
        right: 5%;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #274D00;
        width: 92px;
        height: 26px;
        background: #FF7C7C;
        border-radius: 10px;
        border: none;
    }
`