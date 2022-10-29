import GlobalStyle from './GlobalStyle';
import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'
import SubPage from './pages/SubPage/SubPage';
import SubscriptionsPage from './pages/SubscriptionsPage/SubscriptionsPage';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/sign-up' element={<SignupPage/>}></Route>
        <Route path='/yoursubscription' element={<SubPage/>}></Route>
        <Route path='/subscriptions' element={<SubscriptionsPage/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
);
}

export default App;
