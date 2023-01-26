import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import { api } from "../services/auth.js";
import Produto from "../components/Produto.js";

export default function Produtos() {
    const [produto, setProduto] = useState([])

    useEffect(() => {
        api.get(`/`)
            .then(res => {
                setProduto(res.data)
            })
            .catch(err => alert(err.response.data.message))
    },[])
    return (
        <StyleProdutos>
            <Header/>
            <Categoria>
                <h1>
                    Alimentação
                </h1>
                {produto &&
                    produto.map((p) =>
                        p.categoria === "Alimentação" &&
                        <Produto key={p.obs} p={p}/>)
                }
            </Categoria>
            <Categoria>
                <h1>
                    Acessórios
                </h1>
                {produto &&
                    produto.map((p) =>
                        p.categoria === "Acessórios" &&
                        <Produto key={p.descricao} p={p}/>
                    )
                }
            </Categoria>
            <Categoria>
                <h1>
                    Higiene
                </h1>
                {produto &&
                    produto.map((p) =>
                        p.categoria === "Higiene" &&
                        <>
                        <Produto key={p._id} p={p}/>
                        <Produto key={p.nome} p={p}/>
                        </>
                    )
                }
            </Categoria>
            <Footer/>
        </StyleProdutos>
    )
}

const StyleProdutos = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    margin: 150px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const Categoria = styled.div`
    position: relative;
    display: -webkit-box;
    width: 90%;
    height: 280px;
    flex-wrap: nowrap;
    gap: 10px;
    overflow: scroll;
    >h1{
        position: absolute;
        top: 10px;
        left: 0px;
        font-weight: 700;
        font-size: 25px;
        line-height: 29px;
        color: #274D00;
    }
`