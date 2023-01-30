import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState } from "react";
import { api } from "../services/auth.js"
import { InfoContext } from "../context/info.js";
import { ItensContext } from "../context/itens.js";
import pix from "../assets/pix.png";
import boleto from "../assets/boleto.png";
import cartao from "../assets/visa.png";

export default function FinalizarCompra() {
    const { UserData } = useContext(InfoContext);
    const { setItens, total, setTotal, cesta, setCesta } = useContext(ItensContext)
    const token = UserData.token;
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cep, setCep] = useState("");
    const [pagamentoSelecionado, setPagamentoSelecionado] = useState("");
    const formasDePagamento = [{ forma: "PIX", logo: pix }, { forma: "Boleto", logo: boleto }, { forma: "Cartão", logo: cartao }];
    const navigate = useNavigate();
    
    function handleFinalizar(e) {
        e.preventDefault();
        var now = new Date()
        const body = {
            nome: nome,
            email: email,
            cep: cep,
            formaDePagamento: pagamentoSelecionado,
            cesta: cesta,
            total: total,
            idUsuario: UserData.idUsuario,
            criadoEm: now
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        api.post(`/finalizar`, body, config)

            .then(response => {
                console.log(response);
                alert("Compra realizada com sucesso!");

                setNome("");
                setEmail("");
                setCep("");
                setPagamentoSelecionado("");
                setCesta([]);
                setTotal(0);
                setItens(0);

                navigate("/");
            })

            .catch(err => {
                const message = err.response.statusText;
                console.log(message);
                alert("Faça o login para finalizar a compra!");

                setNome("");
                setEmail("");
                setCep("");

                navigate("/login");
            })
    }

    function montarFormularioFinalizar() {
        return (
            <>
                <form onSubmit={handleFinalizar} id="formularioFinalizar">
                    <div><span>Nome:</span></div>
                    <input
                        type="text"
                        name="nome"
                        value={nome}
                        minLength="3"
                        onChange={(e) => setNome(e.target.value)}
                        required />
                    <div><span>Email:</span></div>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    <div><span>CEP:</span></div>
                    <input
                        type="text"
                        name="cep"
                        value={cep}
                        minLength="8"
                        onChange={e => setCep(e.target.value
                            .replace(/\D/g, "")
                            .replace(/(\d{5})(\d{3})/, "$1-$2")
                            .substring(0, 9))}
                        required />
                    <FormaDePagamento>
                        <h1>Forma de pagamento: {pagamentoSelecionado}</h1>
                        <Pagamentos>
                            {formasDePagamento.map((FormaDePagamento) => {
                                return (
                                    <button
                                        type="button"
                                        key={FormaDePagamento.forma}
                                        id={FormaDePagamento.forma}
                                        onClick={() => setPagamentoSelecionado(FormaDePagamento.forma)}>
                                        <img src={FormaDePagamento.logo} alt={FormaDePagamento.forma} />
                                    </button>
                                )
                            })}
                        </Pagamentos>
                        <Total>
                            Total - R${total}
                        </Total>
                        <Finalizar type="submit" id="formularioFinalizar">
                            Finalizar
                        </Finalizar>
                    </FormaDePagamento>
                </form>
            </>
        );
    }

    const formFinalizar = montarFormularioFinalizar();

    return (
        <>
            <Container>
                <h1>Finalizar compra</h1>
                <FormularioFinalizar>
                    {formFinalizar}
                </FormularioFinalizar>
                <Continuar onClick={() => navigate("/")}>
                    Continuar comprando
                </Continuar>
            </Container>
        </>
    );


}


const Container = styled.div`
    margin:150px 0;
    color: #274D00;
    >h1{
        font-family: Raleway;
        font-size: 25px;
        font-weight: 700;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
        color: #274D00;
        margin-bottom: 10px;
    }
`;

const Continuar = styled.button`
        margin: 0 55px;
        border: none;
        background-color: #90BF60;
        text-decoration: underline;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
`

const FormularioFinalizar = styled.div`
    display: flex;
    flex-direction: column;    

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

const Finalizar = styled.button`
    width: 100%;
    height: 50px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    color:#274D00;
    border-radius: 5px;
    border: none;
    background-color: #FF7C7C;
    cursor: pointer;
    margin-bottom: 5px;
`

const FormaDePagamento = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #274D00;
    margin-top: 10px;

    h1 {
        font-family: Rubik;
        font-size: 25px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 10px;
    }
`;

const Pagamentos = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    button{
        width: 80px;
        height: 41px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px;
        &:active{
            transform: scale(1.1);
            border: 4px solid green;
        
        }
        
    img {        
        justify-content: center;
        width: 99%;
    }
    
    }
`;

const Total = styled.div`
    display: flex;
    flex-direction: row-reverse;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: #274D00;
`;