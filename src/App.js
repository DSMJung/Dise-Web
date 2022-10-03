import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MainPage from "./pages/MainPage";
import DetailPost from "./components/DetailPost";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
      <Route path='/*' element={<DetailPost/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
