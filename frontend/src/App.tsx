import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
// import ProtectedRoute from "./components/ProtectedRoute";
import History from "./pages/History";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Library from "./pages/Library";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  const location = window.location.pathname;

  return (
    <BrowserRouter>
      {location === "/login" || location === "/register" ? (
        <></>
      ) : (
        <Navbar isLoggedIn={true} />
      )}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/home"
          element={
            // <ProtectedRoute>
            <Home />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/library"
          element={
            // <ProtectedRoute>
            <Library />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            // <ProtectedRoute>
            <History />
            // </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {location === "/login" || location === "/register" ? (
        <></>
      ) : (
        <Footer isLoggedIn={false} />
      )}
    </BrowserRouter>
  );
}

export default App;
