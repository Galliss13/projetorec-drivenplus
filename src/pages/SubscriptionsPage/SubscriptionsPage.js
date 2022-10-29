import styled from "styled-components"
import { black, gold, white, diamond, purple } from "../../constants/colors"

export default function SubscriptionsPage() {
    return (
        <SubsContainer>
            <Choose>Escolha seu Plano</Choose>
            <Plan>
                <PlanLogo type={white}>D</PlanLogo>
                <Plus>+</Plus>
                <Price>R$ 39,99</Price>
            </Plan>
            <Plan>
                <PlanLogo type={gold}>D</PlanLogo>
                <Plus>+</Plus>
                <Price>R$ 69,99</Price>
            </Plan>
            <Plan>
                <PlanLogo type={diamond}>D</PlanLogo>
                <Plus>+</Plus>
                <Price>R$ 99,99</Price>
            </Plan>
        </SubsContainer>
    )
};

const SubsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Choose = styled.p`
    margin: 30px;
    font-size: 40px;
    color: ${white};
`

const Plan = styled.div`
    position: relative;
    width: 290px;
    height: 180px;
    margin-bottom: 10px;
    background-color: ${black};
    border: 3px solid #7E7E7E;
    border-radius: 12px;
`

const PlanLogo = styled.p`
    font-size: xx-large;
    font-weight: bold;
    color: ${props => props.type};
`

const Price = styled.p`
    position: absolute;
    right: 10px;
    bottom: 70px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: ${white};
`

const Plus = styled.p`
    color: ${purple};
    font-size: 50px;
`