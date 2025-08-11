import {createContext, useContext, useState} from "react";
import AccordionItem from "./Item.jsx";

export {AccordionItem};

const AccordionContext = createContext(null);

export const useAccordionContext = () => {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error('Accordion-related components must be wrapped by <Accordion>');
  }
  return ctx;
};

export default function Accordion({children, className}) {
  const [openItemId, setOpenItemId] = useState();

  function toggleItem(itemId) {
    // setOpenItemId(prevOpenId => prevOpenId === itemId ? null : itemId);
    setOpenItemId(itemId); // does it work as well ?
  }

  const contextVal = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextVal}>
      <ul className={className}>
        {children}
      </ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;