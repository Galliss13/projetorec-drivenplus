import axios from "axios"
import { useEffect, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { black, gold, white, diamond, purple } from "../../constants/colors"
import { url } from "../../constants/URLs"
import AuthContext from "../../contexts/AuthContext"
import Plan from "./Plan"

export default function SubscriptionsPage() {
    const [membership, setMembership] = useState(null)
    const {auth} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        const promise = axios.get(`${url}/subscriptions/memberships`, 
        { headers: { Authorization: `Bearer ${auth.token}` } });
        promise.then(resp => {
            const apiPlan = resp.data
            console.log(resp.data)
            setMembership(apiPlan)
        })
        promise.catch(err => alert(err.response.data.message))
    }, [])

        return (
        <SubsContainer>
            <Choose>Escolha seu Plano</Choose>
            {membership !== null ? membership.map((plan) => (
                <Plan id={plan.id} key={plan.id} image={plan.image} price={plan.price}/>
            )) : ''}
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

const PlanLogo = styled.img`
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