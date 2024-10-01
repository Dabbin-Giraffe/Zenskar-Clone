import React from 'react'
import Carousel from '../../Utils/Carousel/Carousel'
import TopSection from '../../Utils/TopSection/TopSection';
import person1 from "../../../assets/images/utils/person-1.webp";
import person2 from "../../../assets/images/utils/person-2.webp";
import person3 from "../../../assets/images/utils/person-3.png";
import person4 from "../../../assets/images/utils/person-4.jpeg";
import person5 from "../../../assets/images/utils/person-5.png";
import "./DemoMid.css";

const DemoMid = () => {

    const data = [
        {
            image: person1, content: {
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aliquid fuga minus vitae numquam dolore placeat sint ipsum quod doloribus quidem commodi, delectus dicta quam non quis culpa iusto amet sed voluptatem. Architecto, dolorum voluptatum?",
                designation: "lorem ipsum",
                name: "dolar sit amet"
            }
        },
        {
            image: person2, content: {
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aliquid fuga minus vitae numquam dolore placeat sint ipsum quod doloribus quidem commodi, delectus dicta quam non quis culpa iusto amet sed voluptatem. Architecto, dolorum voluptatum?",
                designation: "lorem ipsum",
                name: "dolar sit amet"

            }
        },
        {
            image: person3, content: {
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aliquid fuga minus vitae numquam dolore placeat sint ipsum quod doloribus quidem commodi, delectus dicta quam non quis culpa iusto amet sed voluptatem. Architecto, dolorum voluptatum?",
                designation: "lorem ipsum",
                name: "dolar sit amet"

            }
        },
        {
            image: person4, content: {
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aliquid fuga minus vitae numquam dolore placeat sint ipsum quod doloribus quidem commodi, delectus dicta quam non quis culpa iusto amet sed voluptatem. Architecto, dolorum voluptatum?",
                designation: "lorem ipsum",
                name: "dolar sit amet"

            }
        },
        {
            image: person5, content: {
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aliquid fuga minus vitae numquam dolore placeat sint ipsum quod doloribus quidem commodi, delectus dicta quam non quis culpa iusto amet sed voluptatem. Architecto, dolorum voluptatum?",
                designation: "lorem ipsum",
                name: "dolar sit amet"
            }
        }
    ]

    const topSectionData = { title: "Trusted by industry experts", content: "Fast-growing companies choose Zenskar for smooth, flexible and reliable billing to power their growth." }

    return (
        <>
            <div className="demo-mid-wrapper">
                <div className="demo-mid container">
                    <TopSection data={topSectionData} />
                    <Carousel data={data} />
                </div>
            </div>
        </>
    )
}

export default DemoMid
