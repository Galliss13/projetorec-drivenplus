import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { purple, white } from "../../constants/colors";
import { url } from "../../constants/URLs";

export default function SignupPage() {
  const navigate = useNavigate();
  const [signupform, SetSignupForm] = useState({
    name: "",
    cpf: "",
    email: "",
    password: "",
  });

  function handleSignup(e) {
    SetSignupForm({ ...signupform, [e.target.name]: e.target.value });
  }

  function submitSignupForm(e) {
    e.preventDefault();
    const promise = axios.post(`${url}/auth/sign-up`, signupform);
    promise.then(navigate("/"));
    promise.catch((err) => alert(err.response.data.message));
  }

  return (
    <SignupContainer>
      <SignupForm onSubmit={submitSignupForm}>
        <input
          type={"text"}
          name="name"
          placeholder="Nome"
          value={signupform.name}
          onChange={handleSignup}
          required
        ></input>
        <input
          type={"number"}
          name="cpf"
          placeholder="CPF"
          value={signupform.cpf}
          onChange={handleSignup}
          required
        ></input>
        <input
          type={"email"}
          name="email"
          placeholder="E-mail"
          value={signupform.email}
          onChange={handleSignup}
          required
        ></input>
        <input
          type={"password"}
          name="password"
          placeholder="Senha"
          value={signupform.password}
          onChange={handleSignup}
          required
        ></input>
        <button type={"submit"}>CADASTRAR</button>
      </SignupForm>
      <LinkLogin onClick={() => navigate('/')}>Já possui uma conta? Entre</LinkLogin>
    </SignupContainer>
  );
}

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkLogin = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-decoration-line: underline;
  color: ${white};
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
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
