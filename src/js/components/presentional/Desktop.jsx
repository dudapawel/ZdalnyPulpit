import React from 'react';
import {BlockContainer} from '../containers/BlockContainer.jsx';
const style = {
    backgroundColor:'bisque',
    border: 'none',
    outline: 'none',
    height: 800,
    marginLeft:'300px'
}

export const Desktop = (props)=>{
    return (<div style ={style} onMouseUp={props.onMouseUp} 
            onMouseMove={props.onMouseMove} 
            onMouseLeave={props.onMouseMove} >
                <BlockContainer left={200} top={200} 
                addToOnMouseUp={props.addToOnMouseUp}
                addToOnMouseMove={props.addToOnMouseMove}
                removeFromOnMouseMove={props.removeFromOnMouseMove}
                />
            </div>);
}

