import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { purple, white } from "../../constants/colors";
import { url } from "../../constants/URLs";
import AuthContext from "../../contexts/AuthContext";

export default function SubPage() {
  const [subform, setSubForm] = useState({
    cardName: "",
    cardNumber: "",
    securityNumber: "",
    expirationDate: "",
  });
  const [idmembership, setIdMembership] = useState(null);
  const { auth } = useContext(AuthContext);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get(`${url}/subscriptions/memberships/${params.ID_DO_PLANO[1]}`, {
      headers: { Authorization: `Bearer ${auth.token}` },
    });
    promise.then((resp) => {
      const apiMember = resp.data;
      console.log('rodou', apiMember)
      setIdMembership(apiMember);
    });
    promise.catch((err) => alert(err.response.data.message));
  }, []);


    function handleSubForm (e) {
        setSubForm({...subform, [e.target.name]: e.target.value})
    }

    function submitSubForm (e) {
        e.preventDefault()
        const promise = axios.post(`${url}/subscriptions`, subform,
        { headers: { Authorization: `Bearer ${auth.token}` } })
        promise.then(resp => navigate(`/home/:${resp.id}`))
        promise.catch(err => alert(err.response.data.message))
    }
  return (
    <SubContainer>
      <Back onClick={() => navigate('/subscriptions')}>Voltar</Back>
      <ChosenPlan>
        <Logo src={idmembership !== null ? idmembership.image : ''} />
        <p>{idmembership !== null ? idmembership.name : ''}</p>
      </ChosenPlan>
      <Benefits>
        <p>Benefícios:</p>
        {idmembership.map((b) => (
          <Benefit>{b.perks.title}</Benefit>
        ))}
      </Benefits>
      <Price>
        <p>Preço:</p>
        <p>R$ {idmembership !== null ? idmembership.price : ''} cobrados mensalmente</p>
      </Price>
      <SubForm onSubmit={submitSubForm}>
        <input
          type={"text"}
          name="cardName"
          placeholder="Nome impresso no cartão"
          value={subform.cardName}
          onChange={handleSubForm}
        ></input>
        <input
          type={"number"}
          name="cardNumber"
          placeholder="Dígitos do cartão"
          value={subform.cardNumber}
          onChange={handleSubForm}
        ></input>
        <input
          type={"number"}
          name="securityNumber"
          placeholder="Código de segurança"
          value={subform.securityNumber}
          onChange={handleSubForm}
        ></input>
        <input
          type={"date"}
          name="expirationDate"
          placeholder="Validade"
          value={subform.expirationDate}
          onChange={handleSubForm}
        ></input>
        <button type={"submit"}>ASSINAR</button>
      </SubForm>
    </SubContainer>
  );
}

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Voltar = styled.p`
  position: absolute;
  top: 10px;
  left: 10px;
`

const ChosenPlan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: ${white};
  }
`;
const Logo = styled.img``;
const Benefits = styled.div`
  color: ${white};
  margin-bottom: 10px;
`;
const Benefit = styled.p``;

const Price = styled.p`
  color: ${white};
`;
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
`;
