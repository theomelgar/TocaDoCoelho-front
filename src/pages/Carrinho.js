import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import styled from "styled-components";
import { useContext } from "react"
import { ItensContext } from "../context/itens.js";
import Sugestao from "../components/Sugestao.js";
import { useNavigate } from "react-router-dom";


export default function Carrinho() {

    const { cesta, total } = useContext(ItensContext)
    const navigate = useNavigate()

    console.log(cesta)

    return (

        <StyleProdutos>

            <Header />
            <h1> Carrinho </h1>
            <Compras>
                {cesta ? cesta.map((c) => 
                    <Compra> <h2> {c.produto} - Qtd: {c.quantidade} - R$ {c.valor}</h2> </Compra>
                
                ) :
                    (<Compra><h2>Seu carrinho ainda esta vazio, adicione produtos</h2></Compra>)
                }

                <h3> Total: R$ {total} </h3>
            </Compras>
            <ComprarBtn>COMPRAR</ComprarBtn>
            <Botao onClick={() => navigate(`/`)}>Continuar comprando</Botao>
            <Sugestao/>
            <Footer />
        </StyleProdutos >
    )
}

const StyleProdutos = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    margin: 150px 0 50px 0; 
    >h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 29px;
        color: #274D00;
        margin-left: 15px;
        margin-bottom: 30px;
    }
`

const ComprarBtn = styled.div`
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    :hover{
        opacity: 0.8;
        transform: scale(1.1);
    }
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #274D00;
    width: 142px;
    height: 41px;
    background: #FF7C7C;
    border-radius: 10px;
    border: none;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
`

const Compras = styled.div`
    display: flex;
    flex-direction: column;
    background: blue;
    gap: 10px;
    position: relative;
    margin: 20px;
    top: 0%;
    left: 0%;
    background-color:#d6ffad;
    font-size: 25px;
    line-height: 30px;
    color: #274D00;
    font-family: 'Rubik';
    font-style: normal;
    h2{
        font-weight: 400;
    }
    h3{
        font-weight: 700;   
        text-align: end;
    }
`

const Compra = styled.div`
    font-family: Rubik;
    font-size: 25px;
    color: green;
    padding-left: 20px;
`

const Botao = styled.div`
    cursor: pointer;
    :hover{
        opacity: 0.8;
        transform: scale(1.1);
    }
    text-decoration:underline;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #274D00;
    width: 242px;
    height: 41px;
    border-radius: 10px;
    border: none;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
`