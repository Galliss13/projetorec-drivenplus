import styled from "styled-components"
import { purple, red, white } from "../../constants/colors"
import AuthContext from "../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const {auth} = useContext(AuthContext)
    const navigate = useNavigate();

    function cancelPlan() {
        const promise = axios.delete(`${url}/subscriptions`,{
            headers: { Authorization: `Bearer ${auth.token}` },
          })
        promise.then(() => navigate('/subscriptions'))
        promise.catch((err) => alert(err.response.data.message))
    }
    return (
        <HomeContainer>
            <LogoAvatar>
                <Logo></Logo>
                <Avatar></Avatar>
            </LogoAvatar>
            <HelloClient>Olá, Fulano</HelloClient>
            <Buttons>
                <Benefit>Solicitar brindes</Benefit>
                <Benefit>Material bônus de web</Benefit>
                <Benefit>Aula bônus de tech</Benefit>
            </Buttons>
            <CancelorChange>
                <ChangePlan onClick={() => navigate('/subscriptions')}>Mudar Plano</ChangePlan>
                <CancelPlan onClick={() => cancelPlan}>Cancelar Plano</CancelPlan>
            </CancelorChange>
        </HomeContainer>
    )
};

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const LogoAvatar = styled.div`
    position: relative;
`
const Logo = styled.div`
    position: absolute;
`
const Avatar = styled.div`
    position: absolute;
`
const HelloClient = styled.p``
const Buttons = styled.div`
    display: flex;
    flex-direction: column;
`
const Benefit = styled.button`
    width: 298px;
    height: 52px;
    margin-bottom: 10px;
    border-radius: 8px;
    background-color: ${purple};
    color: ${white};
`
const CancelorChange = styled.div`
    display: flex;
    flex-direction: column;
`
const ChangePlan = styled.button`
    width: 298px;
    height: 52px;
    margin-bottom: 10px;
    border-radius: 8px;
    background-color: ${purple};
    color: ${white};
`
const CancelPlan = styled.button`
    width: 298px;
    height: 52px;   
    border-radius: 8px;
    background-color: ${red};
    color: ${white};
`