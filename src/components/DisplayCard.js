import React,{useState,useContext} from "react";
import {useOutletContext} from 'react-router-dom'
function DisplayCard({id,name,price,img1,img2,type}) {
  const context = useOutletContext();
  console.log(context)
  const [numberOfItems,setNumberOfItems]=useState(1)
  function changeValue(e){
    if(parseInt(e.target.value)>5){
      setNumberOfItems(5)
    }
    else if(parseInt(e.target.value)<0){
      setNumberOfItems(0)
    }else{
      setNumberOfItems(parseInt(e.target.value))
    }
  }
  return (
    <div className="card">
      <div>
        <img src={require(`../product_imgs/${img1}.jpg`)} alt="" />
        <img src="" alt="" />
      </div>
      <div className="bigger">{name}</div>
      <div>{type}</div>
      <div className="bigger">${price}</div>
      <div>
      <input type="number" value={numberOfItems} onChange={changeValue}id="quantity" name="quantity" min="0" max="5"></input>
      <button className="add-to-cart" onClick={()=>
        context({id,name,price,img1,img2,type,quantity:numberOfItems},
        setNumberOfItems(1)
        )}>Add to cart</button>
      </div>
    </div>
  );
}

export default DisplayCard;
