import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { api } from "../services/auth.js"
import { InfoContext } from "../context/info.js";
import { ItensContext } from "../context/itens.js";
import pix from "../assets/pix.png";
import boleto from "../assets/boleto.png";
import cartao from "../assets/visa.png";


export default function FinalizarCompra(){
    const { UserData, setUserData } = useContext(InfoContext);
    const { itens,setItens, total, setTotal, cesta, setCesta } = useContext(ItensContext)
    const token = UserData.token;
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cep,setCep] = useState("");
    const [pagamentoSelecionado, setPagamentoSelecionado] = useState("");
    const [selecionado, setSelecionado] = useState(false);
    const [botaoSelecionado, setBotaoSelecionado] = useState(0);
    const formasDePagamento = [{forma: "pix", logo: "pix"}, {forma: "boleto", logo: "boleto"}, {forma: "cartao", logo: "cartao"}];
    const navigate = useNavigate();

    function handleFinalizar(e){
        e.preventDefault();
        

        const body = {
            nome: nome,
            email: email,
            cep: cep,
            formaDePagamento: pagamentoSelecionado,
            cesta: cesta,
            total: total
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = api.post(`/finalizar`, body, config);

        promise.then( response => {
            console.log(response);
            alert("Compra realizada com sucesso!");

            setNome("");
            setEmail("");
            setCep("");
            setPagamentoSelecionado("");
            setCesta("");
            setTotal("");
            setItens("");

            navigate("/");
        });
    
        promise.catch(err => {
            const message = err.response.statusText;
            console.log(message);
            alert("Faça o login para finalizar a compra!");

            setNome("");
            setEmail("");
            setCep("");
            
            navigate("/login");
        });
    }


    function montarBotoesFormaDePagamento(){

        return formasDePagamento.map((FormaDePagamento, index) => {
            return (
                <button className={`botao ${botaoSelecionado === index ? "ativo" : "inativo"}`} type="button" key={index} id={index} selecionado={index} onClick={() => selecionarFormaDePagamento(FormaDePagamento.forma, index)}>{FormaDePagamento.logo}</button>
            );
        });
    }

    function selecionarFormaDePagamento(pagamento, index){
        setPagamentoSelecionado(pagamento);
        setBotaoSelecionado(index);
        console.log("selecionado");
    }

    const botoes = montarBotoesFormaDePagamento();


    function montarFormularioFinalizar(){
        return(
            <>
                <form onSubmit={handleFinalizar} id="formularioFinalizar">
                    <div><span>Nome:</span></div>
                    <input type="text" name="nome" value={nome} onChange={(e)=> setNome(e.target.nome)} required/>
                    <div><span>Email:</span></div>
                    <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.email)} required/>
                    <div><span>CEP:</span></div>
                    <input type="number" name="cep" value={cep} onChange={(e)=> setCep(e.target.cep)} required />
                    <FormaDePagamento>
                        <h1>Forma de pagamento</h1>
                        <div>
                            <Pagamentos>{botoes}</Pagamentos>
                            <Total><h1>Total - R${total}</h1></Total>
                            <button type="submit" id="formularioFinalizar"><span>Finalizar</span></button>
                            <button><StyledLink to="/"><span>Continuar comprando</span></StyledLink></button>
                        </div>
                    </FormaDePagamento>
                </form>

 
            </>
        );
    }

    const formFinalizar = montarFormularioFinalizar();

    return(
        <>
            <Container>
                <Finalizar><h1>Finalizar</h1></Finalizar>
                <FormularioFinalizar>
                    {formFinalizar}
                </FormularioFinalizar>
            </Container>
        </>
    );


}


const Container = styled.div`
    margin-top: 90px;
    margin-left: 30px;
    margin-right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Finalizar = styled.div`

    h1{
        font-family: Raleway;
        font-size: 25px;
        font-weight: 700;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
        color: #274D00;


    }
`

const FormularioFinalizar = styled.div`
    display: flex;
    flex-direction: column;
    align-self: start;
    

    input {
        width: 100%;
        height: 50px;
        margin-bottom:10px;
        font-family: Raleway;
        font-size: 25px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;        
        color:#274D00;
        border-radius:5px;
        border: 1px solid #D5D5D5;

        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #274D00;
            opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: #274D00;
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
            color: #274D00;
        }

    }

    button {
        width: 100%;
        height: 50px;
        font-family: Raleway;
        font-size: 30px;
        font-weight: 700;
        line-height: 35px;
        letter-spacing: 0em;
        text-align: center;
        color:#274D00;
        border-radius: 5px;
        border: none;
        background-color: #FF7C7C;
        cursor: pointer;
        margin-bottom: 5px;
    }

    span {
        font-family: Raleway;
        font-size: 25px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;

    }

`;

const FormaDePagamento = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #274D00;

    margin-top: auto;
    

    h1 {
        font-family: Raleway;
        font-size: 25px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
    }


`;

const Pagamentos =styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 4px;

    .botao .ativo{
        border: 4px solid red;
    }

    .botao .inativo{
        border: none
    }


    img {        
        width: 80px;
        height: 42px;
        padding: 5px;
        justify-content: center;
    }
    }


    
`;

const Total = styled.div`

    display: flex;
    flex-direction: row-reverse;

    h1 {
        font-family: Raleway;
        font-size: 25px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
    }
`;

const StyledLink = styled(Link)`
  
    color:#274D00;
    font-family: Raleway;
    font-size: 25px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;
  
`;

const BotaoFormaDePagamento = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px;

    .botao-ativo{
        border: 4px solid red;
    }

    .botao-inativo{
        border: none
    }


    img {        
        width: 80px;
        height: 42px;
        padding: 5px;
        justify-content: center;
    }

`;