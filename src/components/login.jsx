import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import "./login.css"

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #ffffe4;
  overflow: hidden;
`;

const AstroImage = styled(motion.img)`
  height: 100%;
  max-width: 100%;
  object-fit: contain;
  margin-right: -40rem;
  position: relative;
  left: -5%;
  animation: rotate 20s linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const FormWrapper = styled(motion.div)`
  background: #F6F6DB;
  padding: 2.5rem; /* Increased padding for a taller box */
  width: 350px;
  border-radius: 16px;
  /*box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);*/
  display:flex;
  flex-direction:column;
  text-align: center;
  align-item: center;
  justify-content: center;
  color: #333;
  opacity: 1;
  position: relative;
  margin-right: 7.5rem;
  margin-left: 7.5rem;
  height: 72rem;
`;


const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #483285;
`;

const InputWrapper = styled.div`
  position: relative;
  margin: 1.5rem 0;
  background: #f4f4f4;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
  background: transparent;
  color: #333;
  transition: all 0.3s ease;

  &:focus {
    outline: 2px solid #5c2e91;
  }
`;

const TogglePassword = styled.span`
  position: absolute;
  top: 50%;
  right: 0.8rem;
  transform: translateY(-50%);
  cursor: pointer;
  color: #666;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  margin: 1rem 0;
  border: none;
  background: #000;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #333;
  }
`;

const GoogleButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  margin: 1rem 0;
  border: none;
  background: #ccc;
  color: #333;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background 0.3s;

  &:hover {
    background: #aaa;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between; /* Positioned the links */
  font-size: 0.9rem;
  color: #666;

  a {
    text-decoration: none;
    color: #5c2e91;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const CenterLinkWrapper = styled.div`
  display: flex;
  justify-content: center; /* Centered the sign-up text */
  font-size: 0.9rem;
  color: #666;
`;

const LoadingSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #5c2e91;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  margin: 10px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <PageWrapper>
      <AstroImage
        src="https://royaltyfreefootages.com/upload/video/Zodiac%20wheel,%20Zodiac%20wheel%20png,%20Zodiac%20wheel%20png%20image,%20Zodiac%20wheel%20transparent%20png%20images%20download_1658935859.png"
        alt="Astro Illustration"
      />
      <FormWrapper>
        <Title>Welcome!</Title>
        <p>Please enter your details</p>
        <form onSubmit={handleLogin}>
          <InputWrapper>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <TogglePassword onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </TogglePassword>
          </InputWrapper>
          <LinkWrapper>
            <a href="/change-password">Forgot Password?</a>
          </LinkWrapper>
          <Button type="submit" disabled={loading}>
            {loading ? <LoadingSpinner /> : "Log In"}
          </Button>
        </form>
        <GoogleButton>
          <FaGoogle /> Log In with Google
        </GoogleButton>
        <CenterLinkWrapper>
          <span>Don't have an account?&nbsp;</span>
          <a href="/create-account"> Sign up</a>
        </CenterLinkWrapper>
      </FormWrapper>
    </PageWrapper>
  );
}

export default Login;