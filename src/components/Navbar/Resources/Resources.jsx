import React from 'react'
import "./Resources.css";
import book from "../../../assets/images/utils/book.svg";
import compare from "../../../assets/images/utils/compare.svg";
import Dropdown from '../Dropdown/Dropdown';
import growthImage from "../../../assets/images/content-images/growth.webp";


const Resources = () => {

  const eBook = () => { (<a href="">Download ebook</a>) }

  const imgPath = "../../../assets/images/content-images/growth.webp";

  const data = {
    menuTitle: "Resources",
    items: [
      {
        icon: book, title: "Resources", elements: [{ content: "lorem" }, { content: "dolar" }
          , { content: "amet" }, { content: "sit" }]
      },
      {
        icon: compare, title: "Compare", elements: [{ content: "lorem" }
          , { content: "ipsum" }, { content: "dolar" }]
      },
      {
        icon: null,
        title: "",
        elements: [
          { content: "Lorem ipsum dolor sit amet", classes: "no-highlight" },
          { content: <img src={growthImage} alt="Growth" /> },
          { content: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sit?", classes: "no-highlight" },
          { content: <a href="">Download ebook ↗</a>, classes: "no-highlight point" }
        ]
      }
    ]
  };

  return (

    <div className="resources-wrapper">
      <Dropdown data={data} />
    </div>
  )
}

export default Resources
