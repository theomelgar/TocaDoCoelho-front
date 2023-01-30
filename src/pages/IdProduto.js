import { useState } from "react"
import { useContext } from "react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Sugestao from "../components/Sugestao"
import { ItensContext } from "../context/itens"
import { api } from "../services/auth"

export default function IdProduto() {
    const [produto, setProduto] = useState([])
    const { id } = useParams()
    const [qtd, setQtd] = useState(1)
    const { setTotal, setItens, setCesta, itens, total, cesta } = useContext(ItensContext)
    const navigate = useNavigate()

    useEffect(() => {
        api.get(`/produtos/${id}`)
            .then(res => {
                setProduto(res.data)
                setQtd(1)

            })
            .catch(err => {
                alert(err.data)
            })

    }, [id])

    const quantidade = (operador) => {
        if (operador === "+") setQtd(qtd + 1)
        else {
            if (qtd === 1) return
            else setQtd(qtd - 1)
        }
    }

    const adicionar = () => {
        let vAntes
        let qAntes
        cesta.map((p) => {
            if (p.produto === produto.nome) {
                let index = cesta.indexOf(p)
                vAntes = Number(cesta[index].valor)
                qAntes = Number(cesta[index].quantidade)
                setCesta(cesta.splice(index, 1))
            }
        })
        if (qAntes > 0) setItens(itens + qtd - qAntes)
        else setItens(itens + qtd)
        if (vAntes > 0) setTotal((Number(total) + Number(produto.valor) * qtd - vAntes).toFixed(2))
        else setTotal((Number(total) + Number(produto.valor) * qtd).toFixed(2))
        const valor = (Number(produto.valor) * qtd).toFixed(2)
        const data = {
            produto: produto.nome,
            quantidade: qtd,
            valor: valor,
        }
        console.log({
            produto: produto.nome,
            quantidade: qtd,
            valor: valor,
        })
        navigate("/carrinho")
        return setCesta([...cesta, data])

    }
    console.log(cesta)
    return (
        <StyleProduto>
            {window.scrollTo(0, 0)}
            <Header />
            <Item>
                <h1>{produto.nome}</h1>
                <img src={produto.foto} alt={"Foto do Produto"} />
                <h1>Descrição</h1>
                <h2>{produto.descricao}</h2>
                <Valores>
                    <p>R$ {(Number(produto.valor) * qtd).toFixed(2)}</p>
                    <button onClick={() => quantidade("+")}>+</button>
                    <p>{qtd}</p>
                    <button onClick={() => quantidade("-")}>-</button>
                    <ComprarBtn onClick={adicionar}>COMPRAR</ComprarBtn>
                </Valores>
            </Item>
            <Sugestao nome={produto.nome} />
            <Footer />
        </StyleProduto>
    )
}


const StyleProduto = styled.div`
    margin: 150px 0;
    
`
const Item = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        position: relative;
        font-family: "Raleway";
        width: 350px;
        height: 380px;
        color: #274D00;
        margin: 0 auto;
    h1{
        font-weight: 700;
        font-size: 25px;
        line-height: 29px;
    }
    h2{
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
    }
    img{
        width: 220px;
        height: 216.19px;
        border-radius: 10px;
    }
`

const Valores = styled.div`
    position: absolute;
    right: -6%;
    top: 21%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 140px;
    width: 150px;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    p{
        font-family: 'Rubik';
        font-size: 24px;
    }
    button{
        font-family: 'Rubik';
        font-weight: 700;
        font-size: 30px;
        line-height: 36px;
        width: 32px;
        height: 32px;
        background: #D9D9D9;
    }
`

const ComprarBtn = styled.div`
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    line-height: 23px;
`