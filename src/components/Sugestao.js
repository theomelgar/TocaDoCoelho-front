import { useEffect, useState } from "react"
import styled from "styled-components"
import { api } from "../services/auth"
import Produto from "./Produto"

export default function Sugestao({nome}){
    const [produto, setProduto] = useState([])
    useEffect(() => {
        api.get(`/`)
            .then(res => {
                setProduto(res.data)
                console.log(res.data)
            })
            .catch(err => alert(err.response.data.message))
    },[])
    return(
        <Sugestoes>
            <StyleSugestao>
            <span>Veja mais</span>
                {produto && produto.map((p)=> p.nome!== nome && <Produto p={p}/> )}
            </StyleSugestao>
        </Sugestoes>
    )
}

const Sugestoes = styled.div`
    width: 100%;
`

const StyleSugestao = styled.div`
   display: -webkit-box;
   overflow: scroll;
   gap: 30px;
   margin-top: 50px;
   margin-left: 3% ;
   position: relative;
   span{
    position: absolute;
    left: 3%;
    font-family: "Raleway";
    font-weight: 700;
    font-size: 25px;
    line-height: 29px;
    color: #274D00;
   }
`