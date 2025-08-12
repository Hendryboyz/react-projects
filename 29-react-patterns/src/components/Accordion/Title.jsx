import {useAccordionContext} from "./index.jsx";
import {useAccordionItemContext} from "./Item.jsx";

export default function AccordionTitle({className, children}) {
  const {toggleItem} = useAccordionContext();
  const {id} = useAccordionItemContext();
  function handleClick() {
    toggleItem(id);
  }
  return (
    <h3 className={className}
        onClick={handleClick}
    >
      {children}
    </h3>
  );
}