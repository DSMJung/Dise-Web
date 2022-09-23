<<<<<<< Updated upstream
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MainPage from "./pages/MainPage";
=======
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DetailPostPage from './pages/DetailPostPage';
>>>>>>> Stashed changes

function App() {
  return (
    <BrowserRouter>
<<<<<<< Updated upstream
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
      </Routes>
=======
    <Routes>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/signup' element={<SignupPage/>}></Route>
      <Route path='/' element={<DetailPostPage/>}></Route>
    </Routes>
>>>>>>> Stashed changes
    </BrowserRouter>
  );
}

export default App;
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
