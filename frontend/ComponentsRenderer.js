import React, { useState } from 'react';
import sampleData from './sampleData';
//potentially make this another container at some point.

//creating a hardcoded array for now 


const components = ['child 1', 'child 2', 'child 3'];

const children = components.map(el => <p>{el}</p>);

const ComponentsRenderer = () => {
    return (
        <div><div className="rightContainer">
            <h1>Parent</h1>
            <div className="childrenComponents">
                {children}
            </div>
        </div>
        </div>
    )
}

export default ComponentsRenderer;