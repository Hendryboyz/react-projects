import {useAccordionContext} from "./index.jsx";
import {useAccordionItemContext} from "./Item.jsx";

export default function AccordionContent({className, children}) {
  const {openItemId} = useAccordionContext();
  const {id} = useAccordionItemContext();
  const isOpen = openItemId === id;
  return (
    <div
      className={className + (isOpen ? ' open' : ' close')}
    >
      {children}
    </div>
  );
}