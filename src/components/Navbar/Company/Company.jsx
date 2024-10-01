import React from 'react';
import "./Company.css";
import building from "../../../assets/images/utils/building.svg";
import Dropdown from '../Dropdown/Dropdown';


const Company = () => {

  const data = {
    menuTitle: "company",
    items: [
      { icon: building, title: "company", elements: [{ content: "lorem" }, { content: "ipsum" }] }
    ]
  }

  return (
    <div className="company-wrapper">
      <Dropdown data={data} />
    </div>
  )
}

export default Company
