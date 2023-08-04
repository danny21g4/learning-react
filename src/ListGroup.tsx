import { useState } from "react";

interface Props {
    items:string[];
    headings :string;
    onSelectItem : (item:string)=>void;

}

function ListGroup({items,headings,onSelectItem}:Props) {
    
    var [selectedItems,setSelectedIndex] = useState(-1);
    return (
        <>
            <div>
                <h2>{headings}</h2>

                {items.length === 0 && <p>no items found</p> } 
                <ul>
                    {items.map((item,index) => (
                        <li className={selectedItems=== index ? 'active' : '' } onClick={() => {setSelectedIndex(index);
                            onSelectItem(item);} } key={item}>{item}</li>
                        ))}
                </ul>
             </div>
        </>
    );
}

export default ListGroup;
