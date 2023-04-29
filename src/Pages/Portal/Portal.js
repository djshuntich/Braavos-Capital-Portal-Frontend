import styled from "styled-components";
import bg from "../../img/bg.png";
import bgvideo from "../../img/bgvideo.mp4";
import { MainLayout } from "../../styles/Layouts";
import Orb from "../../components/Orb/Orb";
import Navigation from "../../components/Navigation/Navigation";
import React, { useMemo, useState } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import Income from "../../components/Income/Income";
import Expenses from "../../components/Expenses/Expenses";
import { useGlobalContext } from "../../context/globalContext";
import { GlobalStyle } from "../../styles/GlobalStyle";

function Portal() {
  const [active, setActive] = useState(1);

  const Global = useGlobalContext();
  console.log(Global);
  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <div className="portal-con">
      <GlobalStyle />
      <AppStyled bg={bg} className="App">
        <BgContainer>
          <VideoBg autoPlay loop muted src={bgvideo} type="video/mp4" />
        </BgContainer>
        {/* {orbMemo} */}
        <MainLayout>
          <Navigation active={active} setActive={setActive} />
          <main>{displayData()}</main>
        </MainLayout>
      </AppStyled>
    </div>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    // background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    //backdrop-filter: blur(4.5px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    -webkit-backdrop-filter: blur(8.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

const BgContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: white;
`;

export default Portal;
