import styled from "styled-components"
import { purple, white } from "../../constants/colors"

export default function SubPage() {
    return (
        <SubContainer>
            <ChosenPlan>
                <Logo>D</Logo>
                <Plus>+</Plus>
                <p>Driven Plus</p>
            </ChosenPlan>
            <Benefits>
                <p>Benefícios:</p>
                <ul>
                   <li>Brindes exclusivos</li> 
                   <li>Materiais bônus de web</li>
                </ul>
            </Benefits>
            <Price>
                <p>Preço:</p>
                <p>R$ 39,99 cobrados mensalmente</p>
            </Price>
            <SubForm>
                <input type={"text"} name="name" placeholder="Nome impresso no cartão" value=""></input>
                <input type={"number"} name="cardnumbers" placeholder="Dígitos do cartão" value=""></input>
                <input type={"number"} name="securitycode" placeholder="Código de segurança" value=""></input>
                <input type={"date"} name="validity" placeholder="Validade" value=""></input>
                <button type={"submit"}>ASSINAR</button>
            </SubForm>
        </SubContainer>
    )
};

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ChosenPlan = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-bottom: 10px;
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        color: ${white};
    }
`
const Logo = styled.div`
    position: absolute;
    color: ${white};
`
const Plus = styled.div`
    color:${purple}
`
const Benefits = styled.div`
    color: ${white};
    margin-bottom: 10px;
`
const Price = styled.p`
    color: ${white};
`
const SubForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    input {
        width: 298px;
        height: 52px; 
        margin-bottom: 10px;
        border-radius: 8px;
    }
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 298px;
        height: 52px;   
        border-radius: 8px;
        background-color: ${purple};
        color: ${white};
    }
`