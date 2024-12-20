import { Link } from "react-router";
function Product(props) {
    const { productInfo ,showbutton } = props;

    return (
        <div className="card">
            <img src={productInfo.image} className="card-img-top" alt="Product" />
            <div className="card-body">
                <h5 className="card-title">{productInfo.title}</h5>
                <p className="card-text">{productInfo.id}.</p>
                <p className="card-text">{productInfo.description}.</p>
              {showbutton &&  <Link className="btn btn-primary" to={`/Product/${productInfo.id}`}>Click here</Link> }
              <h1>Price : {productInfo.price}$</h1>
              
            </div>
        </div>
    );
}

export default Product;
