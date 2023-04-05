import Body from "./Components/Body";
import GlobalContainer from "./Components/GlobalContainer";
import Header from "./Components/Header";
import TitleSection from "./Components/TitleSection";
import PurposeSection from "./Components/PurposeSection";
import CardOverview from "./Components/CardOverview";
import CreateCard from "./Components/CreateCard";

function App() {
  return (
    <div>
      <Body>
        <GlobalContainer>
          <Header />
          <TitleSection />
          <PurposeSection />
          <CardOverview />
          <CreateCard />
        </GlobalContainer>
      </Body>
    </div>
  );
}

export default App;
