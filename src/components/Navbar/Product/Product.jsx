import React from 'react';
import "./Product.css";
import cogWheel from "../../../assets/images/utils/cog-wheel.svg"
import bulb from "../../../assets/images/utils/bulb.svg"
import Dropdown from '../Dropdown/Dropdown';

const Product = () => {

  const data = {
    menuTitle: "Product", items: [
      { icon: cogWheel, title: "Offerings", elements: [{ content: "Lorem" }, { content: "ipsum" }, { content: "dolor" }, { content: "sit" }, { content: "amet" }] },
      { icon: bulb, title: "Features", elements: [{ content: "Lorem" }, { content: "ipsum" }, { content: "dolor" }] }
    ]
  }

  return (
    <div className="product-wrapper">
      <Dropdown data={data} />
    </div>
  )
}

export default Product
