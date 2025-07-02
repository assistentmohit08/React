import './Product.css'
function Product({title,description,prices,features}){
    return(
        <div className="Product">
            <h3>{title}</h3>
            <h5>{description} </h5>
            <h5>{prices}</h5>
            <h4>{features}</h4>
            <button>order</button>
        </div>
    );
}
export default Product;