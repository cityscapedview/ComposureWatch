const PlayerCards = (props) => {
  const charList = [
    {
      name: "Moira",
      img: "src/IMG/portrait-moira.png",
    },
    {
      name: "D.Va",
      img: "src/IMG/portraits/dVa.png",
    },
    {
      name: "Doomfist",
      img: "src/IMG/portraits/doomfist.png",
    },
    {
      name: "JunkerQueen",
      img: "src/IMG/portraits/junkerQueen.png",
    },
    {
      name: "Orisa",
      img: "src/IMG/portraits/orisa.png",
    },
    {
      name: "Ramattra",
      img: "src/IMG/portraits/ramattra.png",
    },
    {
      name: "Reinhardt",
      img: "src/IMG/portraits/reinhardt.png",
    },
    {
      name: "Roadhog",
      img: "src/IMG/portraits/roadHog.png",
    },
    {
      name: "Sigma",
      img: "src/IMG/portraits/sigma.png",
    },
    {
      name: "Winston",
      img: "src/IMG/portraits/winston.png",
    },
    {
      name: "Wrecking Ball",
      img: "src/IMG/portraits/wreckingBall.png",
    },
    {
      name: "Zarya",
      img: "src/IMG/portraits/zarya.png",
    },
    {
      name: "Ashe",
      img: "src/IMG/portraits/ashe.png",
    },
    {
      name: "Bastion",
      img: "src/IMG/portraits/bastion.png",
    },
    {
      name: "Cassidy",
      img: "src/IMG/portraits/cassidy.png",
    },
    {
      name: "Echo",
      img: "src/IMG/portraits/echo.png",
    },
    {
      name: "Genji",
      img: "src/IMG/portraits/genji.png",
    },
    {
      name: "Hanzo",
      img: "src/IMG/portraits/hanzo.png",
    },
    {
      name: "Junkrat",
      img: "src/IMG/portraits/junkrat.png",
    },
    {
      name: "Mei",
      img: "src/IMG/portraits/mei.png",
    },
    {
      name: "Pharah",
      img: "src/IMG/portraits/pharah.png",
    },
    {
      name: "Reaper",
      img: "src/IMG/portraits/reaper.png",
    },
    {
      name: "Sojourn",
      img: "src/IMG/portraits/sojourn.png",
    },
    {
      name: "Soldier76",
      img: "src/IMG/portraits/soldier76.png",
    },
    {
      name: "Sombra",
      img: "src/IMG/portraits/sombra.png",
    },
    {
      name: "Symmetra",
      img: "src/IMG/portraits/symmetra.png",
    },
    {
      name: "Torbjorn",
      img: "src/IMG/portraits/torbjorn.png",
    },
    {
      name: "Tracer",
      img: "src/IMG/portraits/tracer.png",
    },
    {
      name: "Widowmaker",
      img: "src/IMG/portraits/widowmaker.png",
    },
    {
      name: "Ana",
      img: "src/IMG/portraits/ana.png",
    },
    {
      name: "Baptiste",
      img: "src/IMG/portraits/baptiste.png",
    },
    {
      name: "Brigitte",
      img: "src/IMG/portraits/brigitte.png",
    },
    {
      name: "Kiriko",
      img: "src/IMG/portraits/kiriko.png",
    },
    {
      name: "Lucio",
      img: "src/IMG/portraits/lucio.png",
    },
    {
      name: "Mercy",
      img: "src/IMG/portraits/mercy.png",
    },
    {
      name: "Moira",
      img: "src/IMG/portraits/moira.png",
    },
    {
      name: "Zen",
      img: "src/IMG/portraits/zen.png",
    },
  ];

  let charImg;
  if (props.character == "Moira") {
    charImg = "src/IMG/portraits/moira.png";
  } else {
    charImg = <h1>No Character Image Available.</h1>;
  }

  return (
    <div className="bg-black p-8">
      <div className="border-4 border-[#2EF3FF]  rounded-xl shadow-2xl shadow-[#13336C] bg-[#0A0D30]">
        <div className="border-2 border-[#2EF3FF] bg-[#0A0D30] rounded-lg  m-0.5 flex flex-col justify-start items-center">
          <div className="flex flex-col justify-start items-center border-2 bg-black border-[#2EF3FF] border-opacity-75 rounded-lg px-20 py-6  m-0.5 mb-12 text-[#2EF3FF] shadow-inner shadow-[#13336C]">
            <div className="rounded-xl shadow-xl shadow-[#13336C] m-0.5 mb-10">
              <img
                src={charImg}
                alt="character portrait"
                className="border-2 border-black rounded-xl shadow-2xl shadow-[#13336C]"
              />
            </div>
            {/* <p>{props.character}</p> */}
            <h2 className="italic text-3xl leading-10">{props.name}</h2>
            {/* <div>{cardImg}</div> */}
            <h3 className="text-white">{props.rank}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCards;
