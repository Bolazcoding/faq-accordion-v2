import { useState } from "react";
import "./App.css";
import starIcon from "./assets/images/icon-star.svg";
import bgDesktop from "./assets/images/background-pattern-desktop.svg";
import bgMobile from "./assets/images/background-pattern-mobile.svg";
import minusImg from "./assets/images/icon-minus.svg";
import plusImg from "./assets/images/icon-plus.svg";

const faqs = [
  {
    title: "What is Frontend Mentor, and how will it help me?",
    text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    title: "Is Frontend Mentor free?",
    text: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    title: "Can I use Frontend Mentor projects in my portfolio?",
    text: " Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    title: " How can I get help if I'm stuck on a Frontend Mentor challenge?",
    text: " The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

export default function App() {
  return (
    <main>
      <BackgroundImage />
      <div className="container">
        <Header />
        <Accordion data={faqs} />
      </div>
    </main>
  );
}

function BackgroundImage() {
  return (
    <div className="bg_img">
      <picture>
        <source srcSet={bgDesktop} media="(min-width: 830px)" />
        <img className="pattern pattern-desktop" src={bgDesktop} alt="" />
      </picture>

      <picture>
        <source srcSet={bgMobile} media="(min-width: 830px)" />
        <img className="pattern pattern-mobile" src={bgMobile} alt="" />
      </picture>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <img className="faq-star" src={starIcon} alt="FAQImage" />
      <h1 className="faq-heading">FAQs</h1>
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(0);

  return (
    <div className="faq-body">
      {data.map((el, i) => (
        <AccordionItem
          title={el.title}
          key={el.title}
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={i}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? 0 : num);
  }

  return (
    <div className="faq-question1" onClick={handleToggle}>
      <div className="faq">
        <h2>{title}</h2>
        {isOpen ? (
          <img className="icon-plus" src={plusImg} alt="icon-plus" />
        ) : (
          <img className="icon-minus" src={minusImg} alt="icon-minus" />
        )}
      </div>
      {isOpen && <p className="faq-text">{children}</p>}
    </div>
  );
}
