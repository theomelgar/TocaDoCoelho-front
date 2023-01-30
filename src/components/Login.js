import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { api } from "../services/auth.js"
import { InfoContext } from "../context/info.js";


export default function Logar() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const { setUserData, UserData } = useContext(InfoContext);


    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();


        const body = {
            email,
            senha
        }

        const promise = api.post(`/login`, body);

        promise.then(response => {
            setUserData(response.data);
            navigate("/");
        });

        promise.catch(err => {
            const message = err.response.statusText;
            alert(message);
            setEmail("");
            setSenha("");

        });
    }



    function montarFormularioLogin() {
        return (
            <>
                <form onSubmit={handleLogin}>
                    <input type="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                    <input type="password" name="senha" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} required />
                    <div>
                        <button type="submit"><span>Entrar</span></button>
                    </div>
                </form>
            </>
        );
    }

    const formLogin = montarFormularioLogin();

    return (
        <>
            <Container>
                <Login><h1>Entrar</h1></Login>
                <FormularioLogin>
                    {formLogin}
                </FormularioLogin>
                <StyledLink to="/cadastro"><h1>Criar conta</h1></StyledLink>
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

const Login = styled.div`

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

const FormularioLogin = styled.div`
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

    h1{
        font-family: Raleway;
        font-size: 25px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
    }
`;

