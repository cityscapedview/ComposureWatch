import Body from "./Components/UI/Body";
import GlobalContainer from "./Components/UI/GlobalContainer";
import Header from "./Components/Header/Header";
import TitleSection from "./Components/UI/TitleSection";
import PurposeSection from "./Components/UI/PurposeSection";
import Overview from "./Components/UI/Overview";
import CreateCard from "./Components/Card/CreateCard";

function App() {
  return (
    <div>
      <Body>
        <GlobalContainer>
          <Header />
          <TitleSection />
          <PurposeSection />
          <Overview />
          <CreateCard />
        </GlobalContainer>
      </Body>
    </div>
  );
}

export default App;
