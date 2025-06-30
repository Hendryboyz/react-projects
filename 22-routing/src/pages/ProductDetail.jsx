import {useNavigate, useParams} from "react-router-dom";

export const productDetailParams = {
  id: 'productId',
};

function ProductDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const {
    [productDetailParams.id]: productId
  } = params;

  function backToListHandler() {
    navigate('/products');
  }

  return (
    <>
      <p>This is product {productId}</p>
      <button onClick={backToListHandler}>Go to product list</button>
    </>
  );
}

export default ProductDetail;