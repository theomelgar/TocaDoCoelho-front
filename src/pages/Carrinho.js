import axios from "axios"
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import styled from "styled-components";
import { useState } from "react"
import { useEffect } from "react"


export default function Carrinho() {


    const { quantidade, setQuantidade } = useState()
    const { produto, setProduto } = useState([])



    useEffect(() => {
        axios.get("http://localhost:5005/carrinho")
            .then(res => {
                setProduto(res.data)
                setQuantidade()

            })
            .catch(err => {
                alert(err.data)
            })

    }, [])


 function comprar () {

 }


    return (
        <StyleProdutos>
            <Header />


            <ComprarBtn onClick={comprar}>COMPRAR</ComprarBtn>


            <Footer />

        </StyleProdutos>
    )
}

const StyleProdutos = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`


const ComprarBtn = styled.div`
    cursor: pointer;
    :hover{
        opacity: 0.8;
        transform: scale(1.1);
    }
    position: absolute;
    bottom: -35%;
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