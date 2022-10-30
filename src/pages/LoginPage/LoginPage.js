import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { purple, white } from "../../constants/colors";
import { url } from "../../constants/URLs";
import AuthContext from "../../contexts/AuthContext";


export default function LoginPage() {
  const navigate = useNavigate();
  const {auth, setAuth} = useContext(AuthContext)
  const [loginform, setLoginForm] = useState({ email: "", password: "" });

  useEffect(() => {
    if (auth && auth.token) {
      if (auth.membership === null) {
        navigate('/subscriptions')
      } else {
        navigate('/home')
      }
    }
  }, []);

  function handleLoginForm(e) {
    setLoginForm({ ...loginform, [e.target.name]: e.target.value });
  }

  function submitLoginForm(e) {

    localStorage.clear()
    e.preventDefault();

    const promise = axios.post(`${url}/auth/login`, loginform);
    promise.then(login);
    promise.catch((err) => alert(err.response.data.message));

    function login(resp) {
      setAuth(resp.data)
      localStorage.setItem('usuario', JSON.stringify(resp.data));

      if (resp.data.membership === null) {
        navigate("/subscriptions");
      } else {
        navigate("/home");
      }
    }
  }
  return (
    <LoginContainer>
      <LogoDriven>
        <p>
          driven<span>+</span>
        </p>
      </LogoDriven>
      <LoginForm onSubmit={submitLoginForm}>
        <input
          type={"email"}
          name="email"
          placeholder="E-mail"
          value={loginform.email}
          onChange={handleLoginForm}
          required
        ></input>

        <input
          type={"password"}
          name="password"
          placeholder="Senha"
          value={loginform.password}
          onChange={handleLoginForm}
          required
        ></input>
        <button type={"submit"}>ENTRAR</button>
      </LoginForm>
      <LinkRegister onClick={() => navigate("/sign-up")}>
        Não possui um cadastro? Cadastre-se
      </LinkRegister>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LinkRegister = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-decoration-line: underline;
  color: ${white};
`;

const LogoDriven = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  p {
    font-size: 100px;
    font-weight: 600;
    color: ${white};
  }
  span {
    color: ${purple};
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
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
