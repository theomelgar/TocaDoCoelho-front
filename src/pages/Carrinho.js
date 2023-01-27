import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import styled from "styled-components";
import { useContext, useState } from "react"
import { ItensContext } from "../context/itens.js";


export default function Carrinho() {

    const { cesta, total } = useContext(ItensContext)
  

    console.log(cesta)
    
    return (

        <StyleProdutos>

            <Header />

            <h1> Carrinho </h1>

            <Compras>


            {cesta.map((c) => (
                
                
                <Compra> <h2> {c.produto} - Qtd: {c.quantidade} - R$ {c.total}</h2> </Compra>)

                )}

                <ComprarBtn>COMPRAR</ComprarBtn>

                <Botao>Continuar comprando</Botao>

            </Compras>

            <h2> Total: R$ {total} </h2>


            <Footer />

        </StyleProdutos>
    )
}

const StyleProdutos = styled.div`
   
    width: 100vw;
    height: 100vh;
    margin: 150px 0; 
`


const ComprarBtn = styled.div`
    cursor: pointer;
    :hover{
        opacity: 0.8;
        transform: scale(1.1);
    }
    position: absolute;
    left: 40%;
    bottom: -135%;
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
    line-height: 23px;`



const Compras = styled.div`
    display: flex;
    flex-direction: column;
    background: blue;
    gap: 10px;
    position: relative;
    `

const Compra = styled.div`
    font-family: Rubik;
    font-size: 25px;
    color: green;
    background: red;
    `

const Botao = styled.div`
cursor: pointer;
:hover{
    opacity: 0.8;
    transform: scale(1.1);
}
position: absolute;
left: 40%;
bottom: -240%;
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
line-height: 23px;`