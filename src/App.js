import GlobalStyle from "./GlobalStyle";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import SubPage from "./pages/SubPage/SubPage";
import SubscriptionsPage from "./pages/SubscriptionsPage/SubscriptionsPage";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AuthContext from "./contexts/AuthContext";

function App() {
  const persistedAuth = JSON.parse(localStorage.getItem("usuario"));
  const [auth, setAuth] = useState(persistedAuth);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/sign-up" element={<SignupPage />}></Route>
          <Route path="/subscriptions/:ID_DO_PLANO" element={<SubPage />}></Route>
          <Route path="/subscriptions" element={<SubscriptionsPage />}></Route>
          <Route path="/home/:ID_DO_PLANO" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
