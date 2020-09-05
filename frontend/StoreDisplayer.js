import React, { useState } from 'react';
// import prettyPrintJson from 'pretty-print-json';
import dataObj from './sampleData'

import StoreID from './Components/StoreID';


//console.log(dataObj);

let arr = Object.entries(dataObj);
const data = (el, output = []) => {
    //we want to leave idx 0 alone. That will always be the first key.
   //arr.forEach((el, idx) => {
        output.push(el[0])
        if (typeof el[1] !== 'object') return output;
        if (typeof el[1] === 'object') {
            let innerArr = Object.entries(el[1])
            data(innerArr, output);
        }
    output.push(el[1]);
    return output;
  //  })
}

let result = data(arr);
console.log(result);
//function to loop through data
// console.log(dataObj);
const organizeData = (object) => {
    //recursively go through object until we find the value... then that gives us ID, __typename, etc.
    //create an empty array with the label output
    const output = [];
    for (let key in object) {
        // console.log(`Next Object`)
        let num = 0;
        if (typeof object[key] === 'object') {
            let nestedObj = object[key];
            num++;
            for (let element in nestedObj) {
                // console.log(`element: ${element}, value: ${nestedObj[element]}`);
                //push to empty array --> <StoreID id, typename, and other valuable info
                // output.push(<p><StoreID objID={element} value={nestedObj[element]} /></p>);
                //console.log(nestedObj[element]);
                output.push(<li>{element}</li>);
            }
                //ELSE push to empty array --> <storeID id and __typename and other key/value pairs />
            //}
        }
            // output.push(<StoreID data={object[key].props} />);
            // console.log(key);
        output.push(<li key={key}>{key}</li>);
            // <li classId='{num}'>{object[key]}</li>)   
        //loop through main obj ^^ 
        //show the key on the page
        //check the value to see if it is an object {value: { _id, name, other info}}
        //if it is an object, do a recursive call to loop through the value's obj?
    }
   // console.log(output, 'output'
    //return the output array
    return output;
}

const StoreDisplayer = () => {
    const displayData = organizeData(dataObj);
 //   const insertCode = prettyPrintJson.toHtml(displayData);
    return (
        <div className="middleContainer">
            <h1>Store Display Here</h1>
            <div className="display-box">
                <ul>
                    {displayData}
                </ul>
                {/* <pre>{insertCode}</pre> */}
            </div>
        </div>
    )
}

export default StoreDisplayer;