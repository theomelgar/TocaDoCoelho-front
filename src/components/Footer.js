import styled from "styled-components"
export default function Footer() {
    return (
        <StyleFooter>
            <h1>
                🛒
                <p>
                    0
                </p>
            </h1>

            <h2>
                ADICIONE PRODUTOS
            </h2>
        </StyleFooter>
    )
}

const StyleFooter = styled.div`
    position: fixed;
    z-index: 1;
    width: 100vw;
    height: 88px;
    left: 0;
    bottom: 0;
    background-color: #C0E699;
    color: #274D00;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        position: absolute;
        top: 20%;
        left: 5%;
        font-size: 50px;
    }
    h2{
        position: absolute;
        top: 40%;
        right:5%;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
    }
    p{
        position: absolute;
        top: 0%;
        right: -50%;
        font-size: 20px;
    }
`