function Title(){
    let name ="radha";
    return(
        <div className="product">
            <p>2 * 2={2 * 2}</p>
            <p>Hi , {name}</p>
        </div>
    )
}
function Titleadd(){
    let name ="krishna";
    let a = 20;
    return(
        <div>
            <p>{a} *{ a}={a * a}</p>
            <p>Hi , {name}</p>
        </div>
    )
}

export  {Title,Titleadd};