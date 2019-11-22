import React from 'react';

const style={
    border:2,
    borderStyle:'solid',
    borderColor:'black'
}

export const Element = (props)=>{
    return (<div style={style}>
        <props.contentClass  value={props.value}/>
        </div>);
}