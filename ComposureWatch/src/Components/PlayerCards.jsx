const PlayerCards = (props) => {
  const charList = [
    {
      id: "D.Va",
      img: "src/IMG/portraits/dVa.png",
    },
    {
      id: "Doomfist",
      img: "src/IMG/portraits/doomfist.png",
    },
    {
      id: "JunkerQueen",
      img: "src/IMG/portraits/junkerQueen.png",
    },
    {
      id: "Orisa",
      img: "src/IMG/portraits/orisa.png",
    },
    {
      id: "Ramattra",
      img: "src/IMG/portraits/ramattra.png",
    },
    {
      id: "Reinhardt",
      img: "src/IMG/portraits/reinhardt.png",
    },
    {
      id: "Roadhog",
      img: "src/IMG/portraits/roadHog.png",
    },
    {
      id: "Sigma",
      img: "src/IMG/portraits/sigma.png",
    },
    {
      id: "Winston",
      img: "src/IMG/portraits/winston.png",
    },
    {
      id: "Wrecking Ball",
      img: "src/IMG/portraits/wreckingBall.png",
    },
    {
      id: "Zarya",
      img: "src/IMG/portraits/zarya.png",
    },
    {
      id: "Ashe",
      img: "src/IMG/portraits/ashe.png",
    },
    {
      id: "Bastion",
      img: "src/IMG/portraits/bastion.png",
    },
    {
      id: "Cassidy",
      img: "src/IMG/portraits/cassidy.png",
    },
    {
      id: "Echo",
      img: "src/IMG/portraits/echo.png",
    },
    {
      id: "Genji",
      img: "src/IMG/portraits/genji.png",
    },
    {
      id: "Hanzo",
      img: "src/IMG/portraits/hanzo.png",
    },
    {
      id: "Junkrat",
      img: "src/IMG/portraits/junkrat.png",
    },
    {
      id: "Mei",
      img: "src/IMG/portraits/mei.png",
    },
    {
      id: "Pharah",
      img: "src/IMG/portraits/pharah.png",
    },
    {
      id: "Reaper",
      img: "src/IMG/portraits/reaper.png",
    },
    {
      id: "Sojourn",
      img: "src/IMG/portraits/sojourn.png",
    },
    {
      id: "Soldier76",
      img: "src/IMG/portraits/soldier76.png",
    },
    {
      id: "Sombra",
      img: "src/IMG/portraits/sombra.png",
    },
    {
      id: "Symmetra",
      img: "src/IMG/portraits/symmetra.png",
    },
    {
      id: "Torbjorn",
      img: "src/IMG/portraits/torbjorn.png",
    },
    {
      id: "Tracer",
      img: "src/IMG/portraits/tracer.png",
    },
    {
      id: "Widowmaker",
      img: "src/IMG/portraits/widowmaker.png",
    },
    {
      id: "Ana",
      img: "src/IMG/portraits/ana.png",
    },
    {
      id: "Baptiste",
      img: "src/IMG/portraits/baptiste.png",
    },
    {
      id: "Brigitte",
      img: "src/IMG/portraits/brigitte.png",
    },
    {
      id: "Kiriko",
      img: "src/IMG/portraits/kiriko.png",
    },
    {
      id: "Lucio",
      img: "src/IMG/portraits/lucio.png",
    },
    {
      id: "Mercy",
      img: "src/IMG/portraits/mercy.png",
    },
    {
      id: "Moira",
      img: "src/IMG/portraits/moira.png",
    },
    {
      id: "Zen",
      img: "src/IMG/portraits/zen.png",
    },
  ];

  let charImg;
  let result = charList.find((item) => item.id == props.character);
  if (result) {
    charImg = result.img;
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
