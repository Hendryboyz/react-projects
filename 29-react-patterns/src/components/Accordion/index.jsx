import {createContext, useContext, useState} from "react";

const AccordionContext = createContext({
  openItemId: null,
  openItem: (itemId) => {},
  closeItem: () => {},
});

export const useAccordionContext = () => {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error('Accordion-related components must be wrapped by <Accordion>');
  }
  return ctx;
};

export default function Accordion({children, className}) {
  const [openItemId, setOpenItemId] = useState();

  function openItem(id) {
    setOpenItemId(id);
  }

  function closeItem() {
    setOpenItemId(null);
  }

  const contextVal = {
    openItemId,
    openItem,
    closeItem,
  };

  return (
    <AccordionContext.Provider value={contextVal}>
      <ul className={className}>
        {children}
      </ul>
    </AccordionContext.Provider>
  );
}