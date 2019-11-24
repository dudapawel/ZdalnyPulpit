import React from 'react';

const style = {
    backgroundColor:'#0099cc',
    border: 3,
    borderColor: 'black',
    borderStyle:'solid',
    height: window.innerHeight-103,
    width:194,
    position:'absolute',
    left:0,
    top:97
}

export const SideMenu = (props)=>{
    return <div style={style}>
        <button onClick={props.addBlockProperties}>Add block</button>
    </div>;
}