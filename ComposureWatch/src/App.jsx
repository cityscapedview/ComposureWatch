import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Body from "./Components/Body";
import GlobalContainer from "./Components/GlobalContainer";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Body>
        <GlobalContainer>
          <Header />
        </GlobalContainer>
      </Body>
    </div>
  );
}

export default App;
