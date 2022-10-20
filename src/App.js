import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MainPage from "./pages/MainPage";
import WritePostPage from "./pages/WritePostPage";
import MyPage from "./pages/MyPage";
import DetailPost from "./components/DetailPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/writepost" element={<WritePostPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detailpost/:id" element={<DetailPost />} />
        <Route path="/*" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
