import "./App.css";
import MeowHeader from "./assets/MeowHeader";
import MiaudeloRegistrationPage from "./pages/MiaudeloRegistrationPage/MiaudeloRegistrationPage";
import NotFound from "./pages/NotFound/NotFound";
import HomePage from "./pages/homePage/HomePage";
import MiaudeloDetailPage from "./pages/homePage/MiaudeloDetailPage";
import SigninPage from "./pages/signin/SigninPage";
import SignupPage from "./pages/signup/SignUp";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <MeowHeader></MeowHeader>
        <Routes>
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/miaudelo/:id" element={<MiaudeloDetailPage />} />
          <Route path="/new-miaudelo" element={<MiaudeloRegistrationPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
