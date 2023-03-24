const CharIcon = (props) => {
  const charList = [
    {
      id: "D.Va",
      img: "src/images/portraits/dVa.png",
    },
    {
      id: "Doomfist",
      img: "src/images/portraits/doomfist.png",
    },
    {
      id: "JunkerQueen",
      img: "src/images/portraits/junkerQueen.png",
    },
    {
      id: "Orisa",
      img: "src/images/portraits/orisa.png",
    },
    {
      id: "Ramattra",
      img: "src/images/portraits/ramattra.png",
    },
    {
      id: "Reinhardt",
      img: "src/images/portraits/reinhardt.png",
    },
    {
      id: "Roadhog",
      img: "src/images/portraits/roadHog.png",
    },
    {
      id: "Sigma",
      img: "src/images/portraits/sigma.png",
    },
    {
      id: "Winston",
      img: "src/images/portraits/winston.png",
    },
    {
      id: "Wrecking Ball",
      img: "src/images/portraits/wreckingBall.png",
    },
    {
      id: "Zarya",
      img: "src/images/portraits/zarya.png",
    },
    {
      id: "Ashe",
      img: "src/images/portraits/ashe.png",
    },
    {
      id: "Bastion",
      img: "src/images/portraits/bastion.png",
    },
    {
      id: "Cassidy",
      img: "src/images/portraits/cassidy.png",
    },
    {
      id: "Echo",
      img: "src/images/portraits/echo.png",
    },
    {
      id: "Genji",
      img: "src/images/portraits/genji.png",
    },
    {
      id: "Hanzo",
      img: "src/images/portraits/hanzo.png",
    },
    {
      id: "Junkrat",
      img: "src/images/portraits/junkrat.png",
    },
    {
      id: "Mei",
      img: "src/images/portraits/mei.png",
    },
    {
      id: "Pharah",
      img: "src/images/portraits/pharah.png",
    },
    {
      id: "Reaper",
      img: "src/images/portraits/reaper.png",
    },
    {
      id: "Sojourn",
      img: "src/images/portraits/sojourn.png",
    },
    {
      id: "Soldier76",
      img: "src/images/portraits/soldier76.png",
    },
    {
      id: "Sombra",
      img: "src/images/portraits/sombra.png",
    },
    {
      id: "Symmetra",
      img: "src/images/portraits/symmetra.png",
    },
    {
      id: "Torbjorn",
      img: "src/images/portraits/torbjorn.png",
    },
    {
      id: "Tracer",
      img: "src/images/portraits/tracer.png",
    },
    {
      id: "Widowmaker",
      img: "src/images/portraits/widowmaker.png",
    },
    {
      id: "Ana",
      img: "src/images/portraits/ana.png",
    },
    {
      id: "Baptiste",
      img: "src/images/portraits/baptiste.png",
    },
    {
      id: "Brigitte",
      img: "src/images/portraits/brigitte.png",
    },
    {
      id: "Kiriko",
      img: "src/images/portraits/kiriko.png",
    },
    {
      id: "Lucio",
      img: "src/images/portraits/lucio.png",
    },
    {
      id: "Mercy",
      img: "src/images/portraits/mercy.png",
    },
    {
      id: "Moira",
      img: "src/images/portraits/moira.png",
    },
    {
      id: "Zen",
      img: "src/images/portraits/zen.png",
    },
  ];

  let charImg;
  let result = charList.find((item) => item.id === props.character);
  if (result) {
    charImg = result.img;
  }

  return (
    <img
      src={charImg}
      alt="character portrait"
      className="border-2 border-black rounded-full shadow-2xl shadow-[#13336C]"
    />
  );
};

export default CharIcon;
