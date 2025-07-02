import Product  from "./Product";
function ProductGroup(){
    // different different way to pass the array to props 
    let option2=["good for health","best"]
    // creating by object 
    // let option3={a:"good at home" , b:"high durabilty"}
    
    return(
        <>
        <Product title="phone" description ="bad for health" prices={5000} features={["high technology "," dynamic "," robust "]}/>
        <Product title="modeling" description="Not for all" prices={50000} features={option2}/>
        <Product title ="Yoga" description="good for health" prices={100000} features={option2}/>
        </>
    );
}
export default ProductGroup;