import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
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

const SignUp = ({ onSignUp }) => {
  return (
    <div>
      <SignUpForm />
      <button onClick={onSignUp}>Sign Up</button>
    </div>
  );
};

const SignIn = ({ onSignIn }) => {
  return (
    <div>
      <SignInForm />
      <button onClick={onSignIn}>Sign In</button>
    </div>
  );
};

const App = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <Header
        isSignedUp={isSignedUp}
        isLoggedIn={isLoggedIn}
        onSearch={setSearchTerm}
        searchTerm={searchTerm}
      />
      <MainRoutes
        setIsSignedUp={setIsSignedUp}
        setIsLoggedIn={setIsLoggedIn}
        searchTerm={searchTerm}
      />
    </Router>
  );
};

const MainRoutes = ({ setIsSignedUp, setIsLoggedIn, searchTerm }) => {
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
          element={<SignIn onSignIn={() => setIsLoggedIn(true)} />}
        />
        <Route path="/publish" element={<PublishForm />} />
      </Routes>

      {location.pathname === "/" && <Footer />}
    </>
  );
};

export default App;
