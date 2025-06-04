import {useFormStatus} from 'react-dom';
import Button from "./Button.jsx";
export default function Submit({}) {
  const {pending} = useFormStatus();
  return (
    <p>
      <Button type="submit" disabled={pending}>
        {pending ? "Submitting" : "Submit"}
      </Button>
    </p>
  );
}