import {useNavigate} from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  function goBack() {
    navigate('/');
  }
  return (
    <>
      <h1>The Products Page</h1>
      <button onClick={goBack}>Go to Home</button>
    </>
  );
}