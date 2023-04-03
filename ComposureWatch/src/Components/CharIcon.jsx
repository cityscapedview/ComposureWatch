const CharIcon = (props) => {
  const charList = [
    {
      id: "dVa",
      img: "src/images/portraits/dVa.png",
    },
    {
      id: "doomfist",
      img: "src/images/portraits/doomfist.png",
    },
    {
      id: "junkerQueen",
      img: "src/images/portraits/junkerQueen.png",
    },
    {
      id: "orisa",
      img: "src/images/portraits/orisa.png",
    },
    {
      id: "ramattra",
      img: "src/images/portraits/ramattra.png",
    },
    {
      id: "reinhardt",
      img: "src/images/portraits/reinhardt.png",
    },
    {
      id: "roadhog",
      img: "src/images/portraits/roadHog.png",
    },
    {
      id: "sigma",
      img: "src/images/portraits/sigma.png",
    },
    {
      id: "winston",
      img: "src/images/portraits/winston.png",
    },
    {
      id: "wreckingBall",
      img: "src/images/portraits/wreckingBall.png",
    },
    {
      id: "zarya",
      img: "src/images/portraits/zarya.png",
    },
    {
      id: "ashe",
      img: "src/images/portraits/ashe.png",
    },
    {
      id: "bastion",
      img: "src/images/portraits/bastion.png",
    },
    {
      id: "cassidy",
      img: "src/images/portraits/cassidy.png",
    },
    {
      id: "echo",
      img: "src/images/portraits/echo.png",
    },
    {
      id: "genji",
      img: "src/images/portraits/genji.png",
    },
    {
      id: "hanzo",
      img: "src/images/portraits/hanzo.png",
    },
    {
      id: "junkrat",
      img: "src/images/portraits/junkrat.png",
    },
    {
      id: "mei",
      img: "src/images/portraits/mei.png",
    },
    {
      id: "pharah",
      img: "src/images/portraits/pharah.png",
    },
    {
      id: "reaper",
      img: "src/images/portraits/reaper.png",
    },
    {
      id: "sojourn",
      img: "src/images/portraits/sojourn.png",
    },
    {
      id: "soldier76",
      img: "src/images/portraits/soldier76.png",
    },
    {
      id: "sombra",
      img: "src/images/portraits/sombra.png",
    },
    {
      id: "symmetra",
      img: "src/images/portraits/symmetra.png",
    },
    {
      id: "torbjorn",
      img: "src/images/portraits/torbjorn.png",
    },
    {
      id: "tracer",
      img: "src/images/portraits/tracer.png",
    },
    {
      id: "widowmaker",
      img: "src/images/portraits/widowmaker.png",
    },
    {
      id: "ana",
      img: "src/images/portraits/ana.png",
    },
    {
      id: "baptiste",
      img: "src/images/portraits/baptiste.png",
    },
    {
      id: "brigitte",
      img: "src/images/portraits/brigitte.png",
    },
    {
      id: "kiriko",
      img: "src/images/portraits/kiriko.png",
    },
    {
      id: "lucio",
      img: "src/images/portraits/lucio.png",
    },
    {
      id: "mercy",
      img: "src/images/portraits/mercy.png",
    },
    {
      id: "moira",
      img: "src/images/portraits/moira.png",
    },
    {
      id: "zen",
      img: "src/images/portraits/zen.png",
    },
  ];

  let charImg;
  let result = charList.find((item) => item.id === props.character);
  if (result) {
    charImg = result.img;
  }
  console.log({ charImg, result, char: props.character });

  return (
    <img
      src={charImg}
      alt="character portrait"
      className="border-2 border-black rounded-full shadow-2xl shadow-[#13336C]"
    />
  );
};

export default CharIcon;
