import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Product from "./Product";

function ProductDetails() {
    const api_url = "https://fakestoreapi.com/products";
    const [product, setProduct] = useState({}); // Start with null to check loading state
    const params = useParams();
   
    const getProducts=()=>{
        fetch(`${api_url}/${params.productId}`)
        .then((res) => res.json())
        .then((productData) => {
            setProduct(productData); // Set the fetched product
        })
    }
    
    useEffect(() => {
        // Fetch product only if productId exists
        getProducts();
        
               
        
    }, []); // Effect runs again when productId changes

    return (
        <div>
            <Product productInfo={product}  showbutton={false}/>
        </div>
    );
}

export default ProductDetails;
