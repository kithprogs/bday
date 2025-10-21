import { useState } from "react";
import "./App.css";
import duduFlowers from "./assets/bubu-dudu-flower-gift.gif";
import dudu2 from './assets/dudu2.gif'
import dudu3 from './assets/dudu3.gif'
import dudu4 from './assets/dudu4.gif'
import dudu5 from './assets/dudu5.gif'
import dudu6 from './assets/dudu6.gif'
import dudu7 from './assets/dudu7.gif'
import dudu8 from './assets/dudu8.jpg'
import qr from './assets/qr.png'

function App() {
  const slides = [
    {
      title: "Hello my baby 💕",
      message: "",
      img: duduFlowers
    },
    {
      title: "It's your born day today",
      message: "I always love seeing you being happy and growing day by day.",
      img: dudu2
    },
    {
      title: "I’m so proud of you ✨",
      message: "You’ve grown and achieved so much — I've already known you for a year kahit na di pa tayo nagkikita sa personal, love na love kita",
      img: dudu3
    },
    {
      title: "My lovely baby",
      message: "You're so mischevous yet so softy",
      img: dudu4
    },
    {
      title: "My emotional baby",
      message: "You're also strong yet may pagka emotional(mga 90%)",
      img: dudu5
    },
    {
      title: "My competetive baby",
      message: "You're competetive din, di mo lang pinapakita para mapanatili ang soft girly na may pagka demonyita ang ugali(mana yung anak mo sayo)",
      img: dudu6
    },
    {
      title: "My sweet baby",
      message: "Laging inheat",
      img: dudu7
    },
    {
      title: " Happy Birthday, Yang! ",
      message: `I'm not good at long messages and yknow it but i want u to know na
      You’ve made my life so much brighter just by being you.  I love every part of you and willingly accept your flaws. 
      This day is your day. I just hope that you’re doing well, your Pat is always right here and I’ll pray for your success and growth, i want you to be happy, healthy, and to be loved unconditionally.
      
       I love you Valerie! Habaduday diday -pat
`,
      long: true, // mark the last slide for styling,
      img: dudu8
    },
     {
      title: "Scan be bitch ",
      img: qr
    },
  ];

  const [step, setStep] = useState(0);

  const handleClick = () => {
    if (step < slides.length - 1) {
      setStep(step + 1);
    } else {
      setStep(0); // restart from beginning
    }
  };

  const current = slides[step];

  return (
    <div className="birthday-container" onClick={handleClick}>
      <div className={`card ${current.long ? "long" : ""}`}>
        <h1 className="title">{current.title}</h1>
        <img src={current.img} alt="Bubu Dudu Flowers" className="gift-img" />
        {current.message && <p className="message">{current.message}</p>}
        <p className="continue-text">
          &lt;&lt; {step === slides.length - 1 ? "tap to restart" : "press to continue"} &gt;&gt;
        </p>
      </div>
    </div>
  );
}

export default App;
