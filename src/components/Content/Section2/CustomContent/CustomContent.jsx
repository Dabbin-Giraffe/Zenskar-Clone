import React from 'react'

const CustomContent = ({ data }) => {


    return (
        <>

            <div className="custom-content-container">
                {
                    data.map((items, index) => (
                        <div className={`custom-content-element ${index % 2 === 0 ? `reverse` : ``}`} key={index}>
                            <div className="custom-content-left">
                                <p className="custom-content-feature sm-text ">
                                    {items.feature}
                                </p>
                                <p className="med-text title">{items.title}</p>
                                <div className="sm-text">{items.content}</div>
                                <div className="custom-content-items">
                                    <ul>
                                        {
                                            items.lists.map((list, listIndex) => (
                                                <li>
                                                    <img src={checkMark} alt="" />
                                                    <p className="xsm-text">{list.content}</p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="custom-content-right">
                                <img src={items.image} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default CustomContent
