import styled from "styled-components";
import "../signIn.css";
/* import Button from "./Button"; */
import bgImg from "../../../img/braavosbg.png";
import { useNavigate } from "react-router-dom";

import Input from "./Input";

function Login() {
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-con">
      <MainPage>
        <BackgroundContainer />
        <MainContainer>
          <WelcomeText>Braavos Capital</WelcomeText>
          <InputContainer>
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="Password" />
          </InputContainer>
          <ButtonContainer>
            {/*  <Button content="Sign In" /> */}
            <StyledButton onClick={navigateToDashboard}>Sign In</StyledButton>
          </ButtonContainer>
          {/* <button onClick={navigateToDashboard} className="button" /> */}
        </MainContainer>
      </MainPage>
    </div>
  );
}

const StyledButton = styled.button`
  background: linear-gradient(to right, rgb(22 24 64) 0%, rgb(40 59 118) 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to right, rgb(28 50 47) 0%, rgb(50 118 96) 79%);
  }
`;

const MainPage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const BackgroundContainer = styled.div`
  background-size: cover;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${bgImg});
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  .button {
    height: 10vh;
    width: 10vw;
    color: grey;
  }
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 50vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 50vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 50vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 40%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Login;
