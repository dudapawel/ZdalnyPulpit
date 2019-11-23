import React from 'react';

const style={
    border:2,
    borderStyle:'solid',
    borderColor:'black'
}

export const Element = (props)=>{
    return (<div style={style} onClick={props.onClick}>
        <props.contentClass  value={props.value}
                        addToOnClick ={props.addToOnClick}
                        removeFromOnClick={props.removeFromOnClick}
                        changeContent={props.changeContent}/>
        </div>);
}