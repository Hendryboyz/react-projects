import {Link, useNavigate} from "react-router-dom";

const PRODUCTS = [
  {id: 'p1', title: 'Product 1'},
  {id: 'p2', title: 'Product 2'},
  {id: 'p3', title: 'Product 3'},
  {id: 'p4', title: 'Product 4'},
  {id: 'p5', title: 'Product 5'},
];

export default function Products() {
  const navigate = useNavigate();
  function goBack() {
    navigate('/');
  }
  return (
    <>
      <h1>The Products Page</h1>
      <button onClick={goBack}>Go to Home</button>
      <ul>
        {PRODUCTS.map((item) => (
          <li key={item.id}>
            <Link to={`/products/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}