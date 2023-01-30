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
    }, [])
    return (
        <StyleProdutos>
            {window.scrollTo(0, 0)}
            <Header />
            <Categoria>
                <h1>
                    Alimentação
                </h1>
                <div>
                {produto &&
                    produto.map((p) =>
                        p.categoria === "Alimentação" &&
                        <Produto key={p.nome} p={p} />)
                }
                </div>
            </Categoria>
            <Categoria>
                <h1>
                    Acessórios
                </h1>
                <div>
                {produto &&
                    produto.map((p) =>
                        p.categoria === "Acessórios" &&
                        <Produto key={p.nome} p={p} />
                    )
                }
                </div>
            </Categoria>
            <Categoria>
                <h1>
                    Higiene
                </h1>
                <div>
                {produto &&
                    produto.map((p) =>
                        p.categoria === "Higiene" &&
                        <>
                            <Produto key={p.nome} p={p} />
                        </>
                    )
                }
                </div>
            </Categoria>
            <Footer />
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
    height: 280px;
    width: 100vw;
    >div{
        margin: 0 10px;
        position: relative;
        display: -webkit-box;
        overflow: auto;
        height: 300px;
    }
    >h1{
        position: absolute;
        top: 10px;
        left: 5%;
        font-weight: 700;
        font-size: 25px;
        line-height: 29px;
        color: #274D00;
    }
`