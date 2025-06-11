import {useFormStatus} from 'react-dom';
import Button from "./Button.jsx";
export default function Submit({pendingMessage = "Submitting..."}) {
  const {pending} = useFormStatus();
  return (
    <p>
      <Button type="submit" disabled={pending}>
        {pending ? pendingMessage : "Submit"}
      </Button>
    </p>
  );
}