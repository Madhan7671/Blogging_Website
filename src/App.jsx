import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./styles/App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Articles from "./components/Articles";
import About from "./components/About";
import Contact from "./components/Contact";
import PublishForm from "./components/Publish";
import SignUpForm from "./components/SignUp";
import SignInForm from "./components/SignIn";

// SignUp component
const SignUp = ({ onSignUp }) => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    onSignUp();
    navigate("/signin"); // Redirect to SignIn after sign-up
  };

  return (
    <div>
      <SignUpForm />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

// SignIn component
const SignIn = ({ onSignIn }) => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    onSignIn();
    navigate("/"); // Redirect to home after sign-in
  };

  return (
    <div>
      <SignInForm />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

// Main App component
const App = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsSignedUp(false);
  };

  return (
    <Router>
      <Header
        isSignedUp={isSignedUp}
        isLoggedIn={isLoggedIn}
        onSearch={setSearchTerm}
        searchTerm={searchTerm}
        onLogout={handleLogout}
      />
      <MainRoutes
        setIsSignedUp={setIsSignedUp}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
        searchTerm={searchTerm}
      />
    </Router>
  );
};

// Routing component
const MainRoutes = ({
  setIsSignedUp,
  setIsLoggedIn,
  isLoggedIn,
  searchTerm,
}) => {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/articles"
          element={<Articles searchTerm={searchTerm} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/signup"
          element={<SignUp onSignUp={() => setIsSignedUp(true)} />}
        />
        <Route
          path="/signin"
          element={
            <SignIn
              onSignIn={() => {
                setIsLoggedIn(true);
                setIsSignedUp(true);
              }}
            />
          }
        />
        <Route
          path="/publish"
          element={
            isLoggedIn ? (
              <PublishForm />
            ) : (
              <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <h2>Please Sign In to access Publish</h2>
              </div>
            )
          }
        />
      </Routes>

      {location.pathname === "/" && <Footer />}
    </>
  );
};

export default App;
