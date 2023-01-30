import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { api } from "../services/auth.js"


export default function Cadastrar(){
    const [formulario, setFormulario] = useState({
        email: "",
        nome: "",
        senha: "",
        confirmarSenha: ""
    });

    const navigate = useNavigate();

    function handleSignUp(e){
        e.preventDefault();
        

        const body = {
            email: formulario.email,
            nome: formulario.nome,
            senha: formulario.senha,
            confirmarSenha: formulario.confirmarSenha
        }

        const promise = api.post(`/cadastro`, body);

        promise.then( response => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/login");
        });
    
        promise.catch(err => {
            const message = err.response.statusText;
            alert(message);
            setFormulario({
                email: "",
                nome: "",
                senha: "",
                confirmarSenha: ""
            });
        });
    }




    function handleFormulario(e){
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    }


    function montarFormularioCadastro(){
        return(
            <>
                <form onSubmit={handleSignUp}>
                    <input type="email" name="email" placeholder="Email" value={formulario.email} onChange={handleFormulario} required/>
                    <input type="text" name="nome" placeholder="Nome" value={formulario.nome} onChange={handleFormulario} required/>
                    <input type="password" name="senha" placeholder="Senha" value={formulario.senha} onChange={handleFormulario} required />
                    <input type="password" name="confirmarSenha" placeholder="Confirmar Senha" value={formulario.confirmarSenha} onChange={handleFormulario} required />
                    <div>
                        <button type="submit"><span>Cadastrar</span></button>
                    </div>
                </form>
            </>
        );
    }

    const formCadastro = montarFormularioCadastro();

    return(
        <>
            <Container>
                <Cadastro><h1>Cadastro</h1></Cadastro>
                <FormularioCadastro>
                    {formCadastro}
                </FormularioCadastro>
                <StyledLink to="/login"><h1>Já tem conta?</h1></StyledLink>
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

const Cadastro = styled.div`

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

const FormularioCadastro = styled.div`
    display: flex;
    flex-direction: column;
    align-self: start;
    
    * {
        margin: 10px 0;
    }
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
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }


`;

const StyledLink = styled(Link)`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #274D00;
;
    margin-bottom: 30px;
    
    &:hover{
        text-decoration: underline;
    }

    h1 {
        font-family: Raleway;
        font-size: 25px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
    }
`;