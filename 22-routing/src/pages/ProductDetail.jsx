import {Link, useNavigate, useParams} from "react-router-dom";

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
    navigate('products');
  }

  return (
    <>
      <p>This is product {productId}</p>
      <p><Link to={'..'} relative='path'>Back</Link></p>
    </>
  );
}

export default ProductDetail;