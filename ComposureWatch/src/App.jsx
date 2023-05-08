import Body from "./Components/UI/Body";
import GlobalContainer from "./Components/UI/GlobalContainer";
import Header from "./Components/Header/Header";
import TitleSection from "./Components/UI/TitleSection";
import PurposeSection from "./Components/UI/PurposeSection";
import Overview from "./Components/UI/Overview";
import CreateCard from "./Components/Card/CreateCard";
import StickyContainer from "./Components/UI/StickyContainer";

function App() {
  return (
    <div>
      <Body>
        <GlobalContainer>
          <StickyContainer>
            <Header />
            <TitleSection />
            <PurposeSection />
            <Overview />
          </StickyContainer>
          <CreateCard />
        </GlobalContainer>
      </Body>
    </div>
  );
}

export default App;
