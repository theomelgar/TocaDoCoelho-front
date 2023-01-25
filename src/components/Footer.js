import styled from "styled-components"
export default function Footer() {
    return (
        <StyleFooter>
            <h1>🛒</h1>
            <p>
                0
            </p>
            <h2>
                ADICIONE PRODUTOS
            </h2>
        </StyleFooter>
    )
}

const StyleFooter = styled.div`
    position: absolute;
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
        font-size: 50px;
    }
    h2{
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
    }
    p{
        font-size: 20px;
    }
`