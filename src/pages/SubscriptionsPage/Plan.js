import styled from "styled-components"
import {black, white} from "../../constants/colors"
import { useNavigate } from "react-router-dom"

export default function Plan(props) {
    const navigate = useNavigate()
    return (
        <PlanContainer onClick={() => {
            navigate(`/subscriptions/${props.id}`)
            console.log(props.id)
     }
     }>
            <PlanLogo src={props.image}/>
            <Price>R${props.price}</Price>
        </PlanContainer>
    )
};

const PlanContainer = styled.div`
    position: relative;
    width: 290px;
    height: 180px;
    margin-bottom: 15px;
    background-color: ${black};
    border: 3px solid #7E7E7E;
    border-radius: 12px;
`

const PlanLogo = styled.img`
    position: absolute;
    left: 20px;
    top: 35px;
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
