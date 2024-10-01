import React from 'react';
import "./Solutions.css";
import people from "../../../assets/images/utils/people.svg";
import cash from "../../../assets/images/utils/cash.svg";
import buildings from "../../../assets/images/utils/buildings.svg";

import Dropdown from '../Dropdown/Dropdown';


const Solutions = () => {

    const data = {
        menuTitle: "Solutions",
        items: [
            { icon: cash, title: "pricing", elements: [{ content: "lorem" }, { content: "ipsum" }] },
            { icon: people, title: "role", elements: [{ content: "lorem" }, { content: "ipsum" }, { content: "dolar" }, { content: "solat" }] },
            { icon: buildings, title: "industries", elements: [{ content: "lorem" }, { content: "ipsum" }, { content: "dolor" }, { content: "sit" }, { content: "amet" }, { content: "consectetur" }, { content: "adipiscing" }, { content: "elit" }, { content: "sit" }] },
        ]
    }

    return (
        <div className="solutions-wrapper">
            <Dropdown data={data} />
        </div>
    )
}

export default Solutions
