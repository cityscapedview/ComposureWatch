import dVa from "../images/portraits/dVa.png";
import doomfist from "../images/portraits/doomfist.png";
import junkerQueen from "../images/portraits/junkerQueen.png";
import orisa from "../images/portraits/orisa.png";
import ramattra from "../images/portraits/ramattra.png";
import reinhardt from "../images/portraits/reinhardt.png";
import roadHog from "../images/portraits/roadHog.png";
import sigma from "../images/portraits/sigma.png";
import winston from "../images/portraits/winston.png";
import wreckingBall from "../images/portraits/wreckingBall.png";
import zarya from "../images/portraits/zarya.png";
import ashe from "../images/portraits/ashe.png";
import bastion from "../images/portraits/bastion.png";
import cassidy from "../images/portraits/cassidy.png";
import echo from "../images/portraits/echo.png";
import genji from "../images/portraits/genji.png";
import hanzo from "../images/portraits/hanzo.png";
import junkRat from "../images/portraits/junkrat.png";
import mei from "../images/portraits/mei.png";
import pharah from "../images/portraits/pharah.png";
import reaper from "../images/portraits/reaper.png";
import sojourn from "../images/portraits/sojourn.png";
import soldier from "../images/portraits/soldier76.png";
import sombra from "../images/portraits/sombra.png";
import symmetra from "../images/portraits/symmetra.png";
import torbjorn from "../images/portraits/torbjorn.png";
import tracer from "../images/portraits/tracer.png";
import widowmaker from "../images/portraits/widowmaker.png";
import ana from "../images/portraits/ana.png";
import baptiste from "../images/portraits/baptiste.png";
import brigitte from "../images/portraits/brigitte.png";
import kiriko from "../images/portraits/kiriko.png";
import lucio from "../images/portraits/lucio.png";
import mercy from "../images/portraits/mercy.png";
import moira from "../images/portraits/moira.png";
import zen from "../images/portraits/zen.png";

const CharIcon = ({ character }) => {
  const charList = [
    {
      id: "dVa",
      img: dVa,
    },
    {
      id: "doomfist",
      img: doomfist,
    },
    {
      id: "junkerQueen",
      img: junkerQueen,
    },
    {
      id: "orisa",
      img: orisa,
    },
    {
      id: "ramattra",
      img: ramattra,
    },
    {
      id: "reinhardt",
      img: reinhardt,
    },
    {
      id: "roadhog",
      img: roadHog,
    },
    {
      id: "sigma",
      img: sigma,
    },
    {
      id: "winston",
      img: winston,
    },
    {
      id: "wreckingBall",
      img: wreckingBall,
    },
    {
      id: "zarya",
      img: zarya,
    },
    {
      id: "ashe",
      img: ashe,
    },
    {
      id: "bastion",
      img: bastion,
    },
    {
      id: "cassidy",
      img: cassidy,
    },
    {
      id: "echo",
      img: echo,
    },
    {
      id: "genji",
      img: genji,
    },
    {
      id: "hanzo",
      img: hanzo,
    },
    {
      id: "junkrat",
      img: junkRat,
    },
    {
      id: "mei",
      img: mei,
    },
    {
      id: "pharah",
      img: pharah,
    },
    {
      id: "reaper",
      img: reaper,
    },
    {
      id: "sojourn",
      img: sojourn,
    },
    {
      id: "soldier76",
      img: soldier,
    },
    {
      id: "sombra",
      img: sombra,
    },
    {
      id: "symmetra",
      img: symmetra,
    },
    {
      id: "torbjorn",
      img: torbjorn,
    },
    {
      id: "tracer",
      img: tracer,
    },
    {
      id: "widowmaker",
      img: widowmaker,
    },
    {
      id: "ana",
      img: ana,
    },
    {
      id: "baptiste",
      img: baptiste,
    },
    {
      id: "brigitte",
      img: brigitte,
    },
    {
      id: "kiriko",
      img: kiriko,
    },
    {
      id: "lucio",
      img: lucio,
    },
    {
      id: "mercy",
      img: mercy,
    },
    {
      id: "moira",
      img: moira,
    },
    {
      id: "zenyatta",
      img: zen,
    },
  ];

  const imgSearch = (character, charList) => {
    let result = charList.find((item) => item.id === character);
    return result.img;
  };

  let charImg = imgSearch(character, charList);

  return (
    <img
      src={charImg}
      alt="character portrait"
      className="border-2 border-black rounded-full shadow-2xl shadow-[#13336C]"
    />
  );
};

export default CharIcon;
