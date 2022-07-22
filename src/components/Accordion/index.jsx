import React, { useState } from "react";
import "./acordion.scss";

// import "react-accessible-accordion/dist/fancy-example.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import clsx from "clsx";

const Acordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Accordion allowZeroExpanded="true" allowMultipleExpanded="true" className="accordion">
      <AccordionItem>
        <AccordionItemHeading
          className={clsx("accordion__heading", {
            active: isActive,
          })}
          onClick={() => setIsActive(!isActive)}
        >
          <AccordionItemButton>
            <span> {isActive ? "-" : "+"}</span> {title}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>{content}</AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Acordion;

{
  /* <AccordionItem>
  <AccordionItemHeading>
    <AccordionItemButton>Память</AccordionItemButton>
  </AccordionItemHeading>
  <AccordionItemPanel>
    <ul className="accordion__memoryList">
      <li className="accordion__memoryItem">64GB</li>
      <li className="accordion__memoryItem">128GB</li>
      <li className="accordion__memoryItem">256GB</li>
    </ul>
  </AccordionItemPanel>
</AccordionItem>; */
}
