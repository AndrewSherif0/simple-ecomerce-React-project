import Product from "./Product";
import { useEffect, useState } from "react";
function ProductList() {
    const Api_url = "https://fakestoreapi.com/products";
    const [DataRetreived , setDataRetreived] = useState([]);
    const [categories, setcategories]= useState([]);
    const getAllcategory=()=>{
        fetch('https://fakestoreapi.com/products/categories')
        .then((res)=>res.json())
        .then((data)=>setcategories(data))
    }
    const getProduct = ()=>{
        fetch(Api_url)
            .then((res) => res.json())
            .then((data) =>
                setDataRetreived(data));
    }
    const getProductsIncategory=(category)=>{
        fetch(`${Api_url}/category/${category}`)
        .then(res=>res.json())
        .then((data)=>setDataRetreived(data))
    }
    useEffect(() => {
        getProduct();
        getAllcategory();            
    }, []);
    console.log(DataRetreived);
    return (
        <>
            <h2 className="text-center p-3"> Our Products </h2>
            <div className="container">
            <button 
                        onClick ={()=>
                        {
                            getProduct();
                        }
                        }
                        className='btn btn-info m-4'>All</button>
                {
                    categories.map((category)=>{
                        return(
                        <button key={category} 
                        onClick ={()=>
                        {
                            getProductsIncategory(category);
                        }
                        }
                        className='btn btn-info m-4'>{category}</button>
                        )
                    })
                   
                }
                <div className="row">

                    {DataRetreived.map((productInfo) => {
                      
                        return (
                            <div className="col-3" key = {productInfo.id}>
                                <Product productInfo={productInfo} showbutton={true} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );

}

export default ProductList;